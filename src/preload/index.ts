import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('electron', {
    locale: navigator.language,
    ipcRenderer: {
      send: (channel, data) => ipcRenderer.send(channel, data),
      on: (channel, callback) => ipcRenderer.on(channel, (_, data) => callback(data)),
      removeListener: (channel, callback) => ipcRenderer.removeListener(channel, callback)
    },
    getNotes: (...args: Parameters<any>) => ipcRenderer.invoke('getNotes', ...args),
    readNote: (...args: Parameters<any>) => ipcRenderer.invoke('readNote', ...args),
    writeNote: (...args: Parameters<any>) => ipcRenderer.invoke('writeNote', ...args),
    createNote: (...args: Parameters<any>) => ipcRenderer.invoke('createNote', ...args),
    deleteNote: (...args: Parameters<any>) => ipcRenderer.invoke('deleteNote', ...args),
    toggleContentProtection: (...args: Parameters<any>) =>
      ipcRenderer.invoke('toggle-content-protection', ...args)
  })
} catch (error) {
  console.error(error)
}
