interface BatteryManager extends EventTarget {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number; // from 0.0 to 1.0

  onchargingchange: ((this: BatteryManager, ev: Event) => any) | null;
  onlevelchange: ((this: BatteryManager, ev: Event) => any) | null;

  addEventListener(type: 'chargingchange' | 'levelchange', listener: (this: BatteryManager, ev: Event) => any): void;
  removeEventListener(type: 'chargingchange' | 'levelchange', listener: (this: BatteryManager, ev: Event) => any): void;
}
