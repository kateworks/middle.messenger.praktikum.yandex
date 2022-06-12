type EventName = string;
type EventArgs = undefined[];
type Callback = (...args: EventArgs) => void;

type Listeners = {
  [index: EventName]: Callback[];
};

export default class EventBus {
  private listeners: Listeners;

  constructor() {
    this.listeners = {};
  }

  on(event: EventName, callback: Callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: EventName, callback: Callback) {
    if (!this.listeners[event]) {
      console.log(`No event: ${event}`);
      return;
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  emit(event: string, ...args: EventArgs) {
    if (!this.listeners[event]) {
      console.log(`No event: ${event}`);
      return;
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}
