export const isDesktop = () => (process as any).client ? window.screen.width > 768 : false
