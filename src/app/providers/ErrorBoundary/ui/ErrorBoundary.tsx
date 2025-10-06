import React, { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
   children: ReactNode;
   fallback?: ReactNode;
}

interface ErrorBoundaryState {
   hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
   constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
   }

   static getDerivedStateFromError(): ErrorBoundaryState {
      return { hasError: true };
   }

   componentDidCatch(error: Error, info: ErrorInfo) {
      console.error('Caught by ErrorBoundary:', error);
      console.error('Component stack:', info.componentStack);
   }

   render() {
      const { hasError } = this.state;
      const { children, fallback } = this.props;

      if (hasError) {
         return (
            fallback || (
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     height: '100vh',
                     flexDirection: 'column',
                     color: '#fff',
                     background: '#111',
                     fontFamily: 'sans-serif',
                  }}
               >
                  <h1>Что-то пошло не так</h1>
                  <button
                     style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        background: '#007BFF',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#fff',
                        cursor: 'pointer',
                     }}
                     onClick={() => window.location.reload()}
                  >
                     Перезагрузить страницу
                  </button>
               </div>
            )
         );
      }

      return children;
   }
}
