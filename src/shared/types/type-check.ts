import { Nullable, Optional, Undefined } from '../types/types';

export const isNull = <T>(value: Nullable<T>): value is null => value === null;

export const isUndefined = <T>(value: Undefined<T>): value is undefined => value === undefined;

export const isExist = <T>(value: Optional<T>): value is T => !isNull(value) && !isUndefined(value);
