declare namespace b {
  var Box: IBox;

  interface ILogger {
    log(...args: any): void;

    debug(...args: any): void;

    info(...args: any): void;

    error(...args: any): void;

    warn(...args: any): void;
  }

  interface IBox {
    setLogger(logger: ILogger): void;

    get<T>(serviceName: string): T;

    register<T>(serviceName: string, service: T): void;

    registerInvokable<T>(serviceName: string, service: T, dependencies: string[]): void;
  }
}

export = b;
