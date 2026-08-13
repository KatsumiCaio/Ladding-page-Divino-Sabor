import React, { ErrorInfo, ReactNode } from 'react';
import { observability } from '../lib/observability';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    observability.captureError(error, {
      componentStack: errorInfo.componentStack,
    });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-6 bg-[#FAF7F2]">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#D9C5B2] shadow-xl text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-[#8C5E44]/10 text-[#8C5E44] flex items-center justify-center mx-auto border border-[#D9C5B2]">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <h2 className="font-serif font-bold text-xl text-[#4A3728]">
              Algo não saiu como esperado
            </h2>

            <p className="text-xs text-[#6B5E55] leading-relaxed">
              Ocorreu um pequeno erro na exibição desta parte da cafeteria. O problema foi registrado pela nossa esteira de observabilidade.
            </p>

            <button
              onClick={this.handleReset}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold bg-[#8C5E44] text-[#FAF7F2] hover:bg-[#704832] transition-all shadow-md cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Recarregar Página</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
