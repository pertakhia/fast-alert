declare module 'fast-alert' {
    const showAlert: (
      message: string,
      textColor?: string,
      backgroundColor?: string,
      position?: 'top' | 'bottom' | 'center',
      duration?: number
    ) => void;
    export default showAlert;
}