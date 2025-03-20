import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import { BrowserWindow, app, globalShortcut, ipcMain, shell } from 'electron'
import path, { join } from 'path'
// import icon from '../../resources/favicon-48.png?asset'

const isProd = false // process.env.NODE_ENV === 'production'

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1560,
    height: 880,
    show: false,
    autoHideMenuBar: true,
    // ...(process.platform === 'linux'
    //   ? { icon: path.join('../../resources/favicon-48.png?asset') }
    //   : {}),
    icon: path.join(__dirname, '../../resources/icon.ico'),
    center: true,
    title: 'NextJS',
    // frame: false,
    vibrancy: 'under-window',
    visualEffectState: 'active',
    titleBarStyle: 'hidden',
    trafficLightPosition: { x: 15, y: 10 },
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: true,
      contextIsolation: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    if (is.dev) {
      mainWindow.webContents.openDevTools()
    }
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // ipcMain.handle('toggle-content-protection', (_, enable: boolean) => {
  //   if (mainWindow) {
  //     mainWindow.setContentProtection(enable)
  //     if (process.platform === 'darwin') {
  const shortcuts = ['Control+Shift+5']
  shortcuts.forEach((shortcut) => {
    globalShortcut.register(shortcut, () => {
      console.log(`Blocked screen capture shortcut: ${shortcut}`)

      ipcMain.on('capture-event', (data) => {
        console.log('Capture Event:', data)
      })

      mainWindow.webContents.send('screen-capture-attempted', {
        type: 'recording',
        timestamp: new Date().toISOString()
      })
    })
  })

  app.on('will-quit', () => {
    globalShortcut.unregisterAll()
  })
  //     }
  //     return enable
  //   }
  //   return false
  // })

  require('child_process').exec('npm run dev', {
    cwd: join(__dirname, '../../src/renderer')
  })

  // const devPath = 'http://localhost:5000'
  // const genPath = devPath

  if (isProd) {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  } else {
    // mainWindow.loadURL(`http://localhost:${port}`)
    mainWindow.loadURL(`http://localhost:5000`)
  }

  mainWindow.webContents.session.setPermissionRequestHandler(
    (webContents, permission, callback) => {
      if (permission === 'media') {
        callback(true) // Automatically allow camera (and microphone) access
      } else {
        callback(false)
      }
    }
  )
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // ipcMain.handle('deleteNote', (_, ...args: Parameters<DeleteNote>) => deleteNote(...args))

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
