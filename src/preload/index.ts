import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
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
