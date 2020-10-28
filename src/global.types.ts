/*
 * The type Constructor<T> is an alias for the construct signature
 * that describes a type which can construct objects of the generic type T
 * and whose constructor function accepts an arbitrary number of parameters of any type
 * On the type level, a class can be represented as a newable function
 */
export type Constructor<T> = new (...args: any[]) => T;

export type Callback = (...args: any) => void;

export type GenericObject<T = any> = {
  [key: string]: T;
};
export type AnyObject = GenericObject;

export type AsyncAction = any;

export interface EnvFlags {
  prp_mode_off: boolean;
  prp_server_on: boolean;
  active_flags?: string[];
}

export interface Permission<T> {
  edit: T;
  required: T;
}
