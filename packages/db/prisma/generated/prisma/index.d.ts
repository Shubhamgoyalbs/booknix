/**
 * Client
 **/

import * as runtime from "./runtime/client.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Account
 *
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>;
/**
 * Model Wallet
 *
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>;
/**
 * Model Transaction
 *
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>;
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Organization
 *
 */
export type Organization =
  $Result.DefaultSelection<Prisma.$OrganizationPayload>;
/**
 * Model Organizer
 *
 */
export type Organizer = $Result.DefaultSelection<Prisma.$OrganizerPayload>;
/**
 * Model Event
 *
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>;
/**
 * Model Review
 *
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>;
/**
 * Model TicketType
 *
 */
export type TicketType = $Result.DefaultSelection<Prisma.$TicketTypePayload>;
/**
 * Model Notification
 *
 */
export type Notification =
  $Result.DefaultSelection<Prisma.$NotificationPayload>;
/**
 * Model Booking
 *
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>;
/**
 * Model BookingItem
 *
 */
export type BookingItem = $Result.DefaultSelection<Prisma.$BookingItemPayload>;
/**
 * Model LockedTicket
 *
 */
export type LockedTicket =
  $Result.DefaultSelection<Prisma.$LockedTicketPayload>;
/**
 * Model LockedItem
 *
 */
export type LockedItem = $Result.DefaultSelection<Prisma.$LockedItemPayload>;
/**
 * Model EventTicketChecker
 *
 */
export type EventTicketChecker =
  $Result.DefaultSelection<Prisma.$EventTicketCheckerPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Currency: {
    INR: "INR";
    USD: "USD";
    EURO: "EURO";
  };

  export type Currency = (typeof Currency)[keyof typeof Currency];

  export const Role: {
    USER: "USER";
    ORGANIZER: "ORGANIZER";
  };

  export type Role = (typeof Role)[keyof typeof Role];

  export const EventType: {
    CONCERT: "CONCERT";
    COMEDY: "COMEDY";
    SPORTS: "SPORTS";
    THEATER: "THEATER";
    CONFERENCE: "CONFERENCE";
    WORKSHOP: "WORKSHOP";
    FESTIVAL: "FESTIVAL";
  };

  export type EventType = (typeof EventType)[keyof typeof EventType];

  export const EventStatus: {
    DRAFT: "DRAFT";
    OPEN: "OPEN";
    BOOKING_STARTED: "BOOKING_STARTED";
    CANCELLED: "CANCELLED";
    CLOSED: "CLOSED";
  };

  export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus];

  export const TransactionType: {
    CREDIT: "CREDIT";
    DEBIT: "DEBIT";
    REFUND: "REFUND";
  };

  export type TransactionType =
    (typeof TransactionType)[keyof typeof TransactionType];

  export const TransactionStatus: {
    PENDING: "PENDING";
    COMPLETED: "COMPLETED";
    FAILED: "FAILED";
    CANCELLED: "CANCELLED";
  };

  export type TransactionStatus =
    (typeof TransactionStatus)[keyof typeof TransactionStatus];
}

export type Currency = $Enums.Currency;

export const Currency: typeof $Enums.Currency;

export type Role = $Enums.Role;

export const Role: typeof $Enums.Role;

export type EventType = $Enums.EventType;

export const EventType: typeof $Enums.EventType;

export type EventStatus = $Enums.EventStatus;

export const EventStatus: typeof $Enums.EventStatus;

export type TransactionType = $Enums.TransactionType;

export const TransactionType: typeof $Enums.TransactionType;

export type TransactionStatus = $Enums.TransactionStatus;

export const TransactionStatus: typeof $Enums.TransactionStatus;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Wallets
   * const wallets = await prisma.wallet.findMany()
   * ```
   */
  get wallet(): Prisma.WalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Transactions
   * const transactions = await prisma.transaction.findMany()
   * ```
   */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizer`: Exposes CRUD operations for the **Organizer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizers
   * const organizers = await prisma.organizer.findMany()
   * ```
   */
  get organizer(): Prisma.OrganizerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reviews
   * const reviews = await prisma.review.findMany()
   * ```
   */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketType`: Exposes CRUD operations for the **TicketType** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TicketTypes
   * const ticketTypes = await prisma.ticketType.findMany()
   * ```
   */
  get ticketType(): Prisma.TicketTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Notifications
   * const notifications = await prisma.notification.findMany()
   * ```
   */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
   * ```
   */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingItem`: Exposes CRUD operations for the **BookingItem** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more BookingItems
   * const bookingItems = await prisma.bookingItem.findMany()
   * ```
   */
  get bookingItem(): Prisma.BookingItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lockedTicket`: Exposes CRUD operations for the **LockedTicket** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more LockedTickets
   * const lockedTickets = await prisma.lockedTicket.findMany()
   * ```
   */
  get lockedTicket(): Prisma.LockedTicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lockedItem`: Exposes CRUD operations for the **LockedItem** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more LockedItems
   * const lockedItems = await prisma.lockedItem.findMany()
   * ```
   */
  get lockedItem(): Prisma.LockedItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventTicketChecker`: Exposes CRUD operations for the **EventTicketChecker** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more EventTicketCheckers
   * const eventTicketCheckers = await prisma.eventTicketChecker.findMany()
   * ```
   */
  get eventTicketChecker(): Prisma.EventTicketCheckerDelegate<
    ExtArgs,
    ClientOptions
  >;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Account: "Account";
    Wallet: "Wallet";
    Transaction: "Transaction";
    User: "User";
    Organization: "Organization";
    Organizer: "Organizer";
    Event: "Event";
    Review: "Review";
    TicketType: "TicketType";
    Notification: "Notification";
    Booking: "Booking";
    BookingItem: "BookingItem";
    LockedTicket: "LockedTicket";
    LockedItem: "LockedItem";
    EventTicketChecker: "EventTicketChecker";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | "account"
        | "wallet"
        | "transaction"
        | "user"
        | "organization"
        | "organizer"
        | "event"
        | "review"
        | "ticketType"
        | "notification"
        | "booking"
        | "bookingItem"
        | "lockedTicket"
        | "lockedItem"
        | "eventTicketChecker";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>;
        fields: Prisma.AccountFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[];
          };
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[];
          };
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[];
          };
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAccount>;
          };
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AccountGroupByOutputType>[];
          };
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>;
            result: $Utils.Optional<AccountCountAggregateOutputType> | number;
          };
        };
      };
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>;
        fields: Prisma.WalletFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[];
          };
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.WalletCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[];
          };
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.WalletUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[];
          };
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateWallet>;
          };
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>;
            result: $Utils.Optional<WalletGroupByOutputType>[];
          };
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>;
            result: $Utils.Optional<WalletCountAggregateOutputType> | number;
          };
        };
      };
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>;
        fields: Prisma.TransactionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[];
          };
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[];
          };
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[];
          };
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTransaction>;
          };
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TransactionGroupByOutputType>[];
          };
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<TransactionCountAggregateOutputType>
              | number;
          };
        };
      };
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>;
        fields: Prisma.OrganizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
          };
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
          };
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
          };
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<OrganizationCountAggregateOutputType>
              | number;
          };
        };
      };
      Organizer: {
        payload: Prisma.$OrganizerPayload<ExtArgs>;
        fields: Prisma.OrganizerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrganizerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrganizerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>;
          };
          findFirst: {
            args: Prisma.OrganizerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrganizerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>;
          };
          findMany: {
            args: Prisma.OrganizerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>[];
          };
          create: {
            args: Prisma.OrganizerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>;
          };
          createMany: {
            args: Prisma.OrganizerCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.OrganizerCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>[];
          };
          delete: {
            args: Prisma.OrganizerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>;
          };
          update: {
            args: Prisma.OrganizerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>;
          };
          deleteMany: {
            args: Prisma.OrganizerDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrganizerUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.OrganizerUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>[];
          };
          upsert: {
            args: Prisma.OrganizerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>;
          };
          aggregate: {
            args: Prisma.OrganizerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganizer>;
          };
          groupBy: {
            args: Prisma.OrganizerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizerGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrganizerCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizerCountAggregateOutputType> | number;
          };
        };
      };
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>;
        fields: Prisma.EventFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[];
          };
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[];
          };
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[];
          };
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEvent>;
          };
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EventGroupByOutputType>[];
          };
          count: {
            args: Prisma.EventCountArgs<ExtArgs>;
            result: $Utils.Optional<EventCountAggregateOutputType> | number;
          };
        };
      };
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>;
        fields: Prisma.ReviewFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[];
          };
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[];
          };
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[];
          };
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReview>;
          };
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReviewGroupByOutputType>[];
          };
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>;
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number;
          };
        };
      };
      TicketType: {
        payload: Prisma.$TicketTypePayload<ExtArgs>;
        fields: Prisma.TicketTypeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TicketTypeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TicketTypeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>;
          };
          findFirst: {
            args: Prisma.TicketTypeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TicketTypeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>;
          };
          findMany: {
            args: Prisma.TicketTypeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>[];
          };
          create: {
            args: Prisma.TicketTypeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>;
          };
          createMany: {
            args: Prisma.TicketTypeCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TicketTypeCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>[];
          };
          delete: {
            args: Prisma.TicketTypeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>;
          };
          update: {
            args: Prisma.TicketTypeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>;
          };
          deleteMany: {
            args: Prisma.TicketTypeDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TicketTypeUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TicketTypeUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>[];
          };
          upsert: {
            args: Prisma.TicketTypeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>;
          };
          aggregate: {
            args: Prisma.TicketTypeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTicketType>;
          };
          groupBy: {
            args: Prisma.TicketTypeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TicketTypeGroupByOutputType>[];
          };
          count: {
            args: Prisma.TicketTypeCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<TicketTypeCountAggregateOutputType>
              | number;
          };
        };
      };
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>;
        fields: Prisma.NotificationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
          };
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
          };
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
          };
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateNotification>;
          };
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<NotificationGroupByOutputType>[];
          };
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<NotificationCountAggregateOutputType>
              | number;
          };
        };
      };
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>;
        fields: Prisma.BookingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[];
          };
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[];
          };
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[];
          };
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBooking>;
          };
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookingGroupByOutputType>[];
          };
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>;
            result: $Utils.Optional<BookingCountAggregateOutputType> | number;
          };
        };
      };
      BookingItem: {
        payload: Prisma.$BookingItemPayload<ExtArgs>;
        fields: Prisma.BookingItemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BookingItemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BookingItemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>;
          };
          findFirst: {
            args: Prisma.BookingItemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BookingItemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>;
          };
          findMany: {
            args: Prisma.BookingItemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>[];
          };
          create: {
            args: Prisma.BookingItemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>;
          };
          createMany: {
            args: Prisma.BookingItemCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BookingItemCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>[];
          };
          delete: {
            args: Prisma.BookingItemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>;
          };
          update: {
            args: Prisma.BookingItemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>;
          };
          deleteMany: {
            args: Prisma.BookingItemDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BookingItemUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BookingItemUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>[];
          };
          upsert: {
            args: Prisma.BookingItemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>;
          };
          aggregate: {
            args: Prisma.BookingItemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBookingItem>;
          };
          groupBy: {
            args: Prisma.BookingItemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookingItemGroupByOutputType>[];
          };
          count: {
            args: Prisma.BookingItemCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<BookingItemCountAggregateOutputType>
              | number;
          };
        };
      };
      LockedTicket: {
        payload: Prisma.$LockedTicketPayload<ExtArgs>;
        fields: Prisma.LockedTicketFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.LockedTicketFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedTicketPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.LockedTicketFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedTicketPayload>;
          };
          findFirst: {
            args: Prisma.LockedTicketFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedTicketPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.LockedTicketFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedTicketPayload>;
          };
          findMany: {
            args: Prisma.LockedTicketFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedTicketPayload>[];
          };
          create: {
            args: Prisma.LockedTicketCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedTicketPayload>;
          };
          createMany: {
            args: Prisma.LockedTicketCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.LockedTicketCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedTicketPayload>[];
          };
          delete: {
            args: Prisma.LockedTicketDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedTicketPayload>;
          };
          update: {
            args: Prisma.LockedTicketUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedTicketPayload>;
          };
          deleteMany: {
            args: Prisma.LockedTicketDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.LockedTicketUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.LockedTicketUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedTicketPayload>[];
          };
          upsert: {
            args: Prisma.LockedTicketUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedTicketPayload>;
          };
          aggregate: {
            args: Prisma.LockedTicketAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLockedTicket>;
          };
          groupBy: {
            args: Prisma.LockedTicketGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LockedTicketGroupByOutputType>[];
          };
          count: {
            args: Prisma.LockedTicketCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<LockedTicketCountAggregateOutputType>
              | number;
          };
        };
      };
      LockedItem: {
        payload: Prisma.$LockedItemPayload<ExtArgs>;
        fields: Prisma.LockedItemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.LockedItemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedItemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.LockedItemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedItemPayload>;
          };
          findFirst: {
            args: Prisma.LockedItemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedItemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.LockedItemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedItemPayload>;
          };
          findMany: {
            args: Prisma.LockedItemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedItemPayload>[];
          };
          create: {
            args: Prisma.LockedItemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedItemPayload>;
          };
          createMany: {
            args: Prisma.LockedItemCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.LockedItemCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedItemPayload>[];
          };
          delete: {
            args: Prisma.LockedItemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedItemPayload>;
          };
          update: {
            args: Prisma.LockedItemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedItemPayload>;
          };
          deleteMany: {
            args: Prisma.LockedItemDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.LockedItemUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.LockedItemUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedItemPayload>[];
          };
          upsert: {
            args: Prisma.LockedItemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LockedItemPayload>;
          };
          aggregate: {
            args: Prisma.LockedItemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLockedItem>;
          };
          groupBy: {
            args: Prisma.LockedItemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LockedItemGroupByOutputType>[];
          };
          count: {
            args: Prisma.LockedItemCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<LockedItemCountAggregateOutputType>
              | number;
          };
        };
      };
      EventTicketChecker: {
        payload: Prisma.$EventTicketCheckerPayload<ExtArgs>;
        fields: Prisma.EventTicketCheckerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.EventTicketCheckerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventTicketCheckerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.EventTicketCheckerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventTicketCheckerPayload>;
          };
          findFirst: {
            args: Prisma.EventTicketCheckerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventTicketCheckerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.EventTicketCheckerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventTicketCheckerPayload>;
          };
          findMany: {
            args: Prisma.EventTicketCheckerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventTicketCheckerPayload>[];
          };
          create: {
            args: Prisma.EventTicketCheckerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventTicketCheckerPayload>;
          };
          createMany: {
            args: Prisma.EventTicketCheckerCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.EventTicketCheckerCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventTicketCheckerPayload>[];
          };
          delete: {
            args: Prisma.EventTicketCheckerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventTicketCheckerPayload>;
          };
          update: {
            args: Prisma.EventTicketCheckerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventTicketCheckerPayload>;
          };
          deleteMany: {
            args: Prisma.EventTicketCheckerDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.EventTicketCheckerUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.EventTicketCheckerUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventTicketCheckerPayload>[];
          };
          upsert: {
            args: Prisma.EventTicketCheckerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventTicketCheckerPayload>;
          };
          aggregate: {
            args: Prisma.EventTicketCheckerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEventTicketChecker>;
          };
          groupBy: {
            args: Prisma.EventTicketCheckerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EventTicketCheckerGroupByOutputType>[];
          };
          count: {
            args: Prisma.EventTicketCheckerCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<EventTicketCheckerCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit;
    wallet?: WalletOmit;
    transaction?: TransactionOmit;
    user?: UserOmit;
    organization?: OrganizationOmit;
    organizer?: OrganizerOmit;
    event?: EventOmit;
    review?: ReviewOmit;
    ticketType?: TicketTypeOmit;
    notification?: NotificationOmit;
    booking?: BookingOmit;
    bookingItem?: BookingItemOmit;
    lockedTicket?: LockedTicketOmit;
    lockedItem?: LockedItemOmit;
    eventTicketChecker?: EventTicketCheckerOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T["level"] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type WalletCountOutputType
   */

  export type WalletCountOutputType = {
    transactions: number;
  };

  export type WalletCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transactions?: boolean | WalletCountOutputTypeCountTransactionsArgs;
  };

  // Custom InputTypes
  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WalletCountOutputType
     */
    select?: WalletCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountTransactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reviews: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReviewWhereInput;
  };

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    members: number;
    events: number;
  };

  export type OrganizationCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    members?: boolean | OrganizationCountOutputTypeCountMembersArgs;
    events?: boolean | OrganizationCountOutputTypeCountEventsArgs;
  };

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMembersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizerWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountEventsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EventWhereInput;
  };

  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    ticketTypes: number;
    reviews: number;
  };

  export type EventCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    ticketTypes?: boolean | EventCountOutputTypeCountTicketTypesArgs;
    reviews?: boolean | EventCountOutputTypeCountReviewsArgs;
  };

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicketTypesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TicketTypeWhereInput;
  };

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountReviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReviewWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
  };

  export type AccountMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    password: string | null;
    lastName: string | null;
    refreshToken: string | null;
    isVerified: boolean | null;
    avatarUrl: string | null;
    role: $Enums.Role | null;
    walletId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type AccountMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    password: string | null;
    lastName: string | null;
    refreshToken: string | null;
    isVerified: boolean | null;
    avatarUrl: string | null;
    role: $Enums.Role | null;
    walletId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type AccountCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    password: number;
    lastName: number;
    refreshToken: number;
    isVerified: number;
    avatarUrl: number;
    role: number;
    walletId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type AccountMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    password?: true;
    lastName?: true;
    refreshToken?: true;
    isVerified?: true;
    avatarUrl?: true;
    role?: true;
    walletId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type AccountMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    password?: true;
    lastName?: true;
    refreshToken?: true;
    isVerified?: true;
    avatarUrl?: true;
    role?: true;
    walletId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type AccountCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    password?: true;
    lastName?: true;
    refreshToken?: true;
    isVerified?: true;
    avatarUrl?: true;
    role?: true;
    walletId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type AccountAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Accounts
     **/
    _count?: true | AccountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AccountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AccountMaxAggregateInputType;
  };

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
    [P in keyof T & keyof AggregateAccount]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>;
  };

  export type AccountGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AccountWhereInput;
    orderBy?:
      | AccountOrderByWithAggregationInput
      | AccountOrderByWithAggregationInput[];
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum;
    having?: AccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AccountCountAggregateInputType | true;
    _min?: AccountMinAggregateInputType;
    _max?: AccountMaxAggregateInputType;
  };

  export type AccountGroupByOutputType = {
    id: string;
    email: string;
    firstName: string;
    password: string;
    lastName: string;
    refreshToken: string | null;
    isVerified: boolean;
    avatarUrl: string;
    role: $Enums.Role;
    walletId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: AccountCountAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
  };

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AccountGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof AccountGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>;
        }
      >
    >;

  export type AccountSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      password?: boolean;
      lastName?: boolean;
      refreshToken?: boolean;
      isVerified?: boolean;
      avatarUrl?: boolean;
      role?: boolean;
      walletId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      wallet?: boolean | WalletDefaultArgs<ExtArgs>;
      user?: boolean | Account$userArgs<ExtArgs>;
      organizer?: boolean | Account$organizerArgs<ExtArgs>;
    },
    ExtArgs["result"]["account"]
  >;

  export type AccountSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      password?: boolean;
      lastName?: boolean;
      refreshToken?: boolean;
      isVerified?: boolean;
      avatarUrl?: boolean;
      role?: boolean;
      walletId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      wallet?: boolean | WalletDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["account"]
  >;

  export type AccountSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      password?: boolean;
      lastName?: boolean;
      refreshToken?: boolean;
      isVerified?: boolean;
      avatarUrl?: boolean;
      role?: boolean;
      walletId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      wallet?: boolean | WalletDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["account"]
  >;

  export type AccountSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    password?: boolean;
    lastName?: boolean;
    refreshToken?: boolean;
    isVerified?: boolean;
    avatarUrl?: boolean;
    role?: boolean;
    walletId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type AccountOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "email"
    | "firstName"
    | "password"
    | "lastName"
    | "refreshToken"
    | "isVerified"
    | "avatarUrl"
    | "role"
    | "walletId"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["account"]
  >;
  export type AccountInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>;
    user?: boolean | Account$userArgs<ExtArgs>;
    organizer?: boolean | Account$organizerArgs<ExtArgs>;
  };
  export type AccountIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>;
  };
  export type AccountIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>;
  };

  export type $AccountPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Account";
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs> | null;
      organizer: Prisma.$OrganizerPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string;
        password: string;
        lastName: string;
        refreshToken: string | null;
        isVerified: boolean;
        avatarUrl: string;
        role: $Enums.Role;
        walletId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["account"]
    >;
    composites: {};
  };

  type AccountGetPayload<
    S extends boolean | null | undefined | AccountDefaultArgs,
  > = $Result.GetResult<Prisma.$AccountPayload, S>;

  type AccountCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AccountFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: AccountCountAggregateInputType | true;
  };

  export interface AccountDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Account"];
      meta: { name: "Account" };
    };
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     *
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     *
     */
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     *
     */
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
     **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AccountCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AccountAggregateArgs>(
      args: Subset<T, AccountAggregateArgs>,
    ): Prisma.PrismaPromise<GetAccountAggregateType<T>>;

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs["orderBy"] }
        : { orderBy?: AccountGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAccountGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Account model
     */
    readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, WalletDefaultArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      | $Result.GetResult<
          Prisma.$WalletPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends Account$userArgs<ExtArgs> = {}>(
      args?: Subset<T, Account$userArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    organizer<T extends Account$organizerArgs<ExtArgs> = {}>(
      args?: Subset<T, Account$organizerArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", "String">;
    readonly email: FieldRef<"Account", "String">;
    readonly firstName: FieldRef<"Account", "String">;
    readonly password: FieldRef<"Account", "String">;
    readonly lastName: FieldRef<"Account", "String">;
    readonly refreshToken: FieldRef<"Account", "String">;
    readonly isVerified: FieldRef<"Account", "Boolean">;
    readonly avatarUrl: FieldRef<"Account", "String">;
    readonly role: FieldRef<"Account", "Role">;
    readonly walletId: FieldRef<"Account", "String">;
    readonly createdAt: FieldRef<"Account", "DateTime">;
    readonly updatedAt: FieldRef<"Account", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account create
   */
  export type AccountCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>;
  };

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Account update
   */
  export type AccountUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>;
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>;
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput;
    /**
     * Limit how many Accounts to update.
     */
    limit?: number;
  };

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>;
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput;
    /**
     * Limit how many Accounts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput;
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>;
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>;
  };

  /**
   * Account delete
   */
  export type AccountDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput;
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number;
  };

  /**
   * Account.user
   */
  export type Account$userArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
  };

  /**
   * Account.organizer
   */
  export type Account$organizerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    where?: OrganizerWhereInput;
  };

  /**
   * Account without action
   */
  export type AccountDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
  };

  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null;
    _avg: WalletAvgAggregateOutputType | null;
    _sum: WalletSumAggregateOutputType | null;
    _min: WalletMinAggregateOutputType | null;
    _max: WalletMaxAggregateOutputType | null;
  };

  export type WalletAvgAggregateOutputType = {
    totalBalance: number | null;
  };

  export type WalletSumAggregateOutputType = {
    totalBalance: number | null;
  };

  export type WalletMinAggregateOutputType = {
    id: string | null;
    totalBalance: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type WalletMaxAggregateOutputType = {
    id: string | null;
    totalBalance: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type WalletCountAggregateOutputType = {
    id: number;
    totalBalance: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type WalletAvgAggregateInputType = {
    totalBalance?: true;
  };

  export type WalletSumAggregateInputType = {
    totalBalance?: true;
  };

  export type WalletMinAggregateInputType = {
    id?: true;
    totalBalance?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type WalletMaxAggregateInputType = {
    id?: true;
    totalBalance?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type WalletCountAggregateInputType = {
    id?: true;
    totalBalance?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type WalletAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Wallets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Wallets
     **/
    _count?: true | WalletCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: WalletAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: WalletSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: WalletMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: WalletMaxAggregateInputType;
  };

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
    [P in keyof T & keyof AggregateWallet]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>;
  };

  export type WalletGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: WalletWhereInput;
    orderBy?:
      | WalletOrderByWithAggregationInput
      | WalletOrderByWithAggregationInput[];
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum;
    having?: WalletScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WalletCountAggregateInputType | true;
    _avg?: WalletAvgAggregateInputType;
    _sum?: WalletSumAggregateInputType;
    _min?: WalletMinAggregateInputType;
    _max?: WalletMaxAggregateInputType;
  };

  export type WalletGroupByOutputType = {
    id: string;
    totalBalance: number;
    createdAt: Date;
    updatedAt: Date;
    _count: WalletCountAggregateOutputType | null;
    _avg: WalletAvgAggregateOutputType | null;
    _sum: WalletSumAggregateOutputType | null;
    _min: WalletMinAggregateOutputType | null;
    _max: WalletMaxAggregateOutputType | null;
  };

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<WalletGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof WalletGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>;
        }
      >
    >;

  export type WalletSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      totalBalance?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      account?: boolean | Wallet$accountArgs<ExtArgs>;
      transactions?: boolean | Wallet$transactionsArgs<ExtArgs>;
      _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["wallet"]
  >;

  export type WalletSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      totalBalance?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["wallet"]
  >;

  export type WalletSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      totalBalance?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["wallet"]
  >;

  export type WalletSelectScalar = {
    id?: boolean;
    totalBalance?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type WalletOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "totalBalance" | "createdAt" | "updatedAt",
    ExtArgs["result"]["wallet"]
  >;
  export type WalletInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    account?: boolean | Wallet$accountArgs<ExtArgs>;
    transactions?: boolean | Wallet$transactionsArgs<ExtArgs>;
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type WalletIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type WalletIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $WalletPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Wallet";
    objects: {
      account: Prisma.$AccountPayload<ExtArgs> | null;
      transactions: Prisma.$TransactionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        totalBalance: number;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["wallet"]
    >;
    composites: {};
  };

  type WalletGetPayload<
    S extends boolean | null | undefined | WalletDefaultArgs,
  > = $Result.GetResult<Prisma.$WalletPayload, S>;

  type WalletCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<WalletFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: WalletCountAggregateInputType | true;
  };

  export interface WalletDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Wallet"];
      meta: { name: "Wallet" };
    };
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(
      args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(
      args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(
      args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     *
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     *
     */
    findMany<T extends WalletFindManyArgs>(
      args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     *
     */
    create<T extends WalletCreateArgs>(
      args: SelectSubset<T, WalletCreateArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends WalletCreateManyArgs>(
      args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {WalletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends WalletCreateManyAndReturnArgs>(
      args?: SelectSubset<T, WalletCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     *
     */
    delete<T extends WalletDeleteArgs>(
      args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends WalletUpdateArgs>(
      args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends WalletDeleteManyArgs>(
      args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends WalletUpdateManyArgs>(
      args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {WalletUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends WalletUpdateManyAndReturnArgs>(
      args: SelectSubset<T, WalletUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(
      args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
     **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], WalletCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends WalletAggregateArgs>(
      args: Subset<T, WalletAggregateArgs>,
    ): Prisma.PrismaPromise<GetWalletAggregateType<T>>;

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs["orderBy"] }
        : { orderBy?: WalletGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetWalletGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Wallet model
     */
    readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    account<T extends Wallet$accountArgs<ExtArgs> = {}>(
      args?: Subset<T, Wallet$accountArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    transactions<T extends Wallet$transactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, Wallet$transactionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TransactionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Wallet model
   */
  interface WalletFieldRefs {
    readonly id: FieldRef<"Wallet", "String">;
    readonly totalBalance: FieldRef<"Wallet", "Int">;
    readonly createdAt: FieldRef<"Wallet", "DateTime">;
    readonly updatedAt: FieldRef<"Wallet", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput;
  };

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput;
  };

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Wallets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[];
  };

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Wallets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[];
  };

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Wallets.
     */
    skip?: number;
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[];
  };

  /**
   * Wallet create
   */
  export type WalletCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>;
  };

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Wallet createManyAndReturn
   */
  export type WalletCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>;
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput;
  };

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>;
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput;
    /**
     * Limit how many Wallets to update.
     */
    limit?: number;
  };

  /**
   * Wallet updateManyAndReturn
   */
  export type WalletUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>;
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput;
    /**
     * Limit how many Wallets to update.
     */
    limit?: number;
  };

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput;
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>;
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>;
  };

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput;
  };

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput;
    /**
     * Limit how many Wallets to delete.
     */
    limit?: number;
  };

  /**
   * Wallet.account
   */
  export type Wallet$accountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    where?: AccountWhereInput;
  };

  /**
   * Wallet.transactions
   */
  export type Wallet$transactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    where?: TransactionWhereInput;
    orderBy?:
      | TransactionOrderByWithRelationInput
      | TransactionOrderByWithRelationInput[];
    cursor?: TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
  };

  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
  };

  export type TransactionAvgAggregateOutputType = {
    amount: number | null;
  };

  export type TransactionSumAggregateOutputType = {
    amount: number | null;
  };

  export type TransactionMinAggregateOutputType = {
    id: string | null;
    walletId: string | null;
    amount: number | null;
    currency: $Enums.Currency | null;
    type: $Enums.TransactionType | null;
    status: $Enums.TransactionStatus | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type TransactionMaxAggregateOutputType = {
    id: string | null;
    walletId: string | null;
    amount: number | null;
    currency: $Enums.Currency | null;
    type: $Enums.TransactionType | null;
    status: $Enums.TransactionStatus | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type TransactionCountAggregateOutputType = {
    id: number;
    walletId: number;
    amount: number;
    currency: number;
    type: number;
    status: number;
    description: number;
    metadata: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type TransactionAvgAggregateInputType = {
    amount?: true;
  };

  export type TransactionSumAggregateInputType = {
    amount?: true;
  };

  export type TransactionMinAggregateInputType = {
    id?: true;
    walletId?: true;
    amount?: true;
    currency?: true;
    type?: true;
    status?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type TransactionMaxAggregateInputType = {
    id?: true;
    walletId?: true;
    amount?: true;
    currency?: true;
    type?: true;
    status?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type TransactionCountAggregateInputType = {
    id?: true;
    walletId?: true;
    amount?: true;
    currency?: true;
    type?: true;
    status?: true;
    description?: true;
    metadata?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type TransactionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?:
      | TransactionOrderByWithRelationInput
      | TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Transactions
     **/
    _count?: true | TransactionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TransactionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TransactionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TransactionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TransactionMaxAggregateInputType;
  };

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> =
    {
      [P in keyof T & keyof AggregateTransaction]: P extends "_count" | "count"
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateTransaction[P]>
        : GetScalarType<T[P], AggregateTransaction[P]>;
    };

  export type TransactionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionWhereInput;
    orderBy?:
      | TransactionOrderByWithAggregationInput
      | TransactionOrderByWithAggregationInput[];
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum;
    having?: TransactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionCountAggregateInputType | true;
    _avg?: TransactionAvgAggregateInputType;
    _sum?: TransactionSumAggregateInputType;
    _min?: TransactionMinAggregateInputType;
    _max?: TransactionMaxAggregateInputType;
  };

  export type TransactionGroupByOutputType = {
    id: string;
    walletId: string;
    amount: number;
    currency: $Enums.Currency;
    type: $Enums.TransactionType;
    status: $Enums.TransactionStatus;
    description: string | null;
    metadata: JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
  };

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TransactionGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof TransactionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>;
        }
      >
    >;

  export type TransactionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      walletId?: boolean;
      amount?: boolean;
      currency?: boolean;
      type?: boolean;
      status?: boolean;
      description?: boolean;
      metadata?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      wallet?: boolean | WalletDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["transaction"]
  >;

  export type TransactionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      walletId?: boolean;
      amount?: boolean;
      currency?: boolean;
      type?: boolean;
      status?: boolean;
      description?: boolean;
      metadata?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      wallet?: boolean | WalletDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["transaction"]
  >;

  export type TransactionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      walletId?: boolean;
      amount?: boolean;
      currency?: boolean;
      type?: boolean;
      status?: boolean;
      description?: boolean;
      metadata?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      wallet?: boolean | WalletDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["transaction"]
  >;

  export type TransactionSelectScalar = {
    id?: boolean;
    walletId?: boolean;
    amount?: boolean;
    currency?: boolean;
    type?: boolean;
    status?: boolean;
    description?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type TransactionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "walletId"
    | "amount"
    | "currency"
    | "type"
    | "status"
    | "description"
    | "metadata"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["transaction"]
  >;
  export type TransactionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>;
  };
  export type TransactionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>;
  };
  export type TransactionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>;
  };

  export type $TransactionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Transaction";
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        walletId: string;
        amount: number;
        currency: $Enums.Currency;
        type: $Enums.TransactionType;
        status: $Enums.TransactionStatus;
        description: string | null;
        metadata: Prisma.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["transaction"]
    >;
    composites: {};
  };

  type TransactionGetPayload<
    S extends boolean | null | undefined | TransactionDefaultArgs,
  > = $Result.GetResult<Prisma.$TransactionPayload, S>;

  type TransactionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    TransactionFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: TransactionCountAggregateInputType | true;
  };

  export interface TransactionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Transaction"];
      meta: { name: "Transaction" };
    };
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(
      args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(
      args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     *
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TransactionFindManyArgs>(
      args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     *
     */
    create<T extends TransactionCreateArgs>(
      args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TransactionCreateManyArgs>(
      args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     *
     */
    delete<T extends TransactionDeleteArgs>(
      args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TransactionUpdateArgs>(
      args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TransactionDeleteManyArgs>(
      args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TransactionUpdateManyArgs>(
      args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(
      args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
     **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], TransactionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TransactionAggregateArgs>(
      args: Subset<T, TransactionAggregateArgs>,
    ): Prisma.PrismaPromise<GetTransactionAggregateType<T>>;

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs["orderBy"] }
        : { orderBy?: TransactionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetTransactionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Transaction model
     */
    readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, WalletDefaultArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      | $Result.GetResult<
          Prisma.$WalletPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", "String">;
    readonly walletId: FieldRef<"Transaction", "String">;
    readonly amount: FieldRef<"Transaction", "Float">;
    readonly currency: FieldRef<"Transaction", "Currency">;
    readonly type: FieldRef<"Transaction", "TransactionType">;
    readonly status: FieldRef<"Transaction", "TransactionStatus">;
    readonly description: FieldRef<"Transaction", "String">;
    readonly metadata: FieldRef<"Transaction", "Json">;
    readonly createdAt: FieldRef<"Transaction", "DateTime">;
    readonly updatedAt: FieldRef<"Transaction", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput;
  };

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput;
  };

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?:
      | TransactionOrderByWithRelationInput
      | TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?:
      | TransactionOrderByWithRelationInput
      | TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?:
      | TransactionOrderByWithRelationInput
      | TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>;
  };

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>;
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput;
  };

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<
      TransactionUpdateManyMutationInput,
      TransactionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput;
    /**
     * Limit how many Transactions to update.
     */
    limit?: number;
  };

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * The data used to update Transactions.
     */
    data: XOR<
      TransactionUpdateManyMutationInput,
      TransactionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput;
    /**
     * Limit how many Transactions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput;
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>;
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>;
  };

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput;
  };

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput;
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number;
  };

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
  };

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    accountId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    accountId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    accountId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    accountId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    accountId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    accountId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    accountId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      accountId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      account?: boolean | AccountDefaultArgs<ExtArgs>;
      reviews?: boolean | User$reviewsArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      accountId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      account?: boolean | AccountDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      accountId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      account?: boolean | AccountDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    accountId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "accountId" | "createdAt" | "updatedAt",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    account?: boolean | AccountDefaultArgs<ExtArgs>;
    reviews?: boolean | User$reviewsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    account?: boolean | AccountDefaultArgs<ExtArgs>;
  };
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    account?: boolean | AccountDefaultArgs<ExtArgs>;
  };

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>;
      reviews: Prisma.$ReviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        accountId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AccountDefaultArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      | $Result.GetResult<
          Prisma.$AccountPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$reviewsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ReviewPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "String">;
    readonly accountId: FieldRef<"User", "String">;
    readonly createdAt: FieldRef<"User", "DateTime">;
    readonly updatedAt: FieldRef<"User", "DateTime">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.reviews
   */
  export type User$reviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    cursor?: ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    organizationName: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    organizationName: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    organizationName: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    organizationName?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    organizationName?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    organizationName?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizations to fetch.
     */
    orderBy?:
      | OrganizationOrderByWithRelationInput
      | OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<
    T extends OrganizationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateOrganization]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type OrganizationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizationWhereInput;
    orderBy?:
      | OrganizationOrderByWithAggregationInput
      | OrganizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: OrganizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    organizationName: string;
    createdAt: Date;
    updatedAt: Date;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OrganizationGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof OrganizationGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
        }
      >
    >;

  export type OrganizationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationName?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      members?: boolean | Organization$membersArgs<ExtArgs>;
      events?: boolean | Organization$eventsArgs<ExtArgs>;
      _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["organization"]
  >;

  export type OrganizationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationName?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["organization"]
  >;

  export type OrganizationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationName?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["organization"]
  >;

  export type OrganizationSelectScalar = {
    id?: boolean;
    organizationName?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type OrganizationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "organizationName" | "createdAt" | "updatedAt",
    ExtArgs["result"]["organization"]
  >;
  export type OrganizationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    members?: boolean | Organization$membersArgs<ExtArgs>;
    events?: boolean | Organization$eventsArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type OrganizationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type OrganizationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $OrganizationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Organization";
    objects: {
      members: Prisma.$OrganizerPayload<ExtArgs>[];
      events: Prisma.$EventPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        organizationName: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["organization"]
    >;
    composites: {};
  };

  type OrganizationGetPayload<
    S extends boolean | null | undefined | OrganizationDefaultArgs,
  > = $Result.GetResult<Prisma.$OrganizationPayload, S>;

  type OrganizationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    OrganizationFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface OrganizationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Organization"];
      meta: { name: "Organization" };
    };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(
      args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(
      args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrganizationFindManyArgs>(
      args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     */
    create<T extends OrganizationCreateArgs>(
      args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrganizationCreateManyArgs>(
      args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     */
    delete<T extends OrganizationDeleteArgs>(
      args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrganizationUpdateArgs>(
      args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(
      args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrganizationUpdateManyArgs>(
      args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(
      args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs["orderBy"] }
        : { orderBy?: OrganizationGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetOrganizationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Organization model
     */
    readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    members<T extends Organization$membersArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$membersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrganizerPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    events<T extends Organization$eventsArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$eventsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$EventPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", "String">;
    readonly organizationName: FieldRef<"Organization", "String">;
    readonly createdAt: FieldRef<"Organization", "DateTime">;
    readonly updatedAt: FieldRef<"Organization", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput;
  };

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput;
  };

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizations to fetch.
     */
    orderBy?:
      | OrganizationOrderByWithRelationInput
      | OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizations to fetch.
     */
    orderBy?:
      | OrganizationOrderByWithRelationInput
      | OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizations to fetch.
     */
    orderBy?:
      | OrganizationOrderByWithRelationInput
      | OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>;
  };

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>;
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput;
  };

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<
      OrganizationUpdateManyMutationInput,
      OrganizationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput;
    /**
     * Limit how many Organizations to update.
     */
    limit?: number;
  };

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * The data used to update Organizations.
     */
    data: XOR<
      OrganizationUpdateManyMutationInput,
      OrganizationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput;
    /**
     * Limit how many Organizations to update.
     */
    limit?: number;
  };

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput;
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>;
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>;
  };

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput;
  };

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput;
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number;
  };

  /**
   * Organization.members
   */
  export type Organization$membersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    where?: OrganizerWhereInput;
    orderBy?:
      | OrganizerOrderByWithRelationInput
      | OrganizerOrderByWithRelationInput[];
    cursor?: OrganizerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrganizerScalarFieldEnum | OrganizerScalarFieldEnum[];
  };

  /**
   * Organization.events
   */
  export type Organization$eventsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    where?: EventWhereInput;
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    cursor?: EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
  };

  /**
   * Model Organizer
   */

  export type AggregateOrganizer = {
    _count: OrganizerCountAggregateOutputType | null;
    _min: OrganizerMinAggregateOutputType | null;
    _max: OrganizerMaxAggregateOutputType | null;
  };

  export type OrganizerMinAggregateOutputType = {
    id: string | null;
    accountId: string | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrganizerMaxAggregateOutputType = {
    id: string | null;
    accountId: string | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrganizerCountAggregateOutputType = {
    id: number;
    accountId: number;
    organizationId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type OrganizerMinAggregateInputType = {
    id?: true;
    accountId?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrganizerMaxAggregateInputType = {
    id?: true;
    accountId?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrganizerCountAggregateInputType = {
    id?: true;
    accountId?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type OrganizerAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Organizer to aggregate.
     */
    where?: OrganizerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizers to fetch.
     */
    orderBy?:
      | OrganizerOrderByWithRelationInput
      | OrganizerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrganizerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Organizers
     **/
    _count?: true | OrganizerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizerMaxAggregateInputType;
  };

  export type GetOrganizerAggregateType<T extends OrganizerAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganizer]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizer[P]>
      : GetScalarType<T[P], AggregateOrganizer[P]>;
  };

  export type OrganizerGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizerWhereInput;
    orderBy?:
      | OrganizerOrderByWithAggregationInput
      | OrganizerOrderByWithAggregationInput[];
    by: OrganizerScalarFieldEnum[] | OrganizerScalarFieldEnum;
    having?: OrganizerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizerCountAggregateInputType | true;
    _min?: OrganizerMinAggregateInputType;
    _max?: OrganizerMaxAggregateInputType;
  };

  export type OrganizerGroupByOutputType = {
    id: string;
    accountId: string;
    organizationId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: OrganizerCountAggregateOutputType | null;
    _min: OrganizerMinAggregateOutputType | null;
    _max: OrganizerMaxAggregateOutputType | null;
  };

  type GetOrganizerGroupByPayload<T extends OrganizerGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OrganizerGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof OrganizerGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizerGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizerGroupByOutputType[P]>;
        }
      >
    >;

  export type OrganizerSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      accountId?: boolean;
      organizationId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      account?: boolean | AccountDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["organizer"]
  >;

  export type OrganizerSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      accountId?: boolean;
      organizationId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      account?: boolean | AccountDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["organizer"]
  >;

  export type OrganizerSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      accountId?: boolean;
      organizationId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      account?: boolean | AccountDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["organizer"]
  >;

  export type OrganizerSelectScalar = {
    id?: boolean;
    accountId?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type OrganizerOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "accountId" | "organizationId" | "createdAt" | "updatedAt",
    ExtArgs["result"]["organizer"]
  >;
  export type OrganizerInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    account?: boolean | AccountDefaultArgs<ExtArgs>;
  };
  export type OrganizerIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    account?: boolean | AccountDefaultArgs<ExtArgs>;
  };
  export type OrganizerIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    account?: boolean | AccountDefaultArgs<ExtArgs>;
  };

  export type $OrganizerPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Organizer";
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>;
      account: Prisma.$AccountPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        accountId: string;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["organizer"]
    >;
    composites: {};
  };

  type OrganizerGetPayload<
    S extends boolean | null | undefined | OrganizerDefaultArgs,
  > = $Result.GetResult<Prisma.$OrganizerPayload, S>;

  type OrganizerCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    OrganizerFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: OrganizerCountAggregateInputType | true;
  };

  export interface OrganizerDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Organizer"];
      meta: { name: "Organizer" };
    };
    /**
     * Find zero or one Organizer that matches the filter.
     * @param {OrganizerFindUniqueArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizerFindUniqueArgs>(
      args: SelectSubset<T, OrganizerFindUniqueArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Organizer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizerFindUniqueOrThrowArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizerFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrganizerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Organizer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerFindFirstArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizerFindFirstArgs>(
      args?: SelectSubset<T, OrganizerFindFirstArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Organizer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerFindFirstOrThrowArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrganizerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Organizers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizers
     * const organizers = await prisma.organizer.findMany()
     *
     * // Get first 10 Organizers
     * const organizers = await prisma.organizer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizerWithIdOnly = await prisma.organizer.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrganizerFindManyArgs>(
      args?: SelectSubset<T, OrganizerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Organizer.
     * @param {OrganizerCreateArgs} args - Arguments to create a Organizer.
     * @example
     * // Create one Organizer
     * const Organizer = await prisma.organizer.create({
     *   data: {
     *     // ... data to create a Organizer
     *   }
     * })
     *
     */
    create<T extends OrganizerCreateArgs>(
      args: SelectSubset<T, OrganizerCreateArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Organizers.
     * @param {OrganizerCreateManyArgs} args - Arguments to create many Organizers.
     * @example
     * // Create many Organizers
     * const organizer = await prisma.organizer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrganizerCreateManyArgs>(
      args?: SelectSubset<T, OrganizerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Organizers and returns the data saved in the database.
     * @param {OrganizerCreateManyAndReturnArgs} args - Arguments to create many Organizers.
     * @example
     * // Create many Organizers
     * const organizer = await prisma.organizer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Organizers and only return the `id`
     * const organizerWithIdOnly = await prisma.organizer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrganizerCreateManyAndReturnArgs>(
      args?: SelectSubset<T, OrganizerCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Organizer.
     * @param {OrganizerDeleteArgs} args - Arguments to delete one Organizer.
     * @example
     * // Delete one Organizer
     * const Organizer = await prisma.organizer.delete({
     *   where: {
     *     // ... filter to delete one Organizer
     *   }
     * })
     *
     */
    delete<T extends OrganizerDeleteArgs>(
      args: SelectSubset<T, OrganizerDeleteArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Organizer.
     * @param {OrganizerUpdateArgs} args - Arguments to update one Organizer.
     * @example
     * // Update one Organizer
     * const organizer = await prisma.organizer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrganizerUpdateArgs>(
      args: SelectSubset<T, OrganizerUpdateArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Organizers.
     * @param {OrganizerDeleteManyArgs} args - Arguments to filter Organizers to delete.
     * @example
     * // Delete a few Organizers
     * const { count } = await prisma.organizer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrganizerDeleteManyArgs>(
      args?: SelectSubset<T, OrganizerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizers
     * const organizer = await prisma.organizer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrganizerUpdateManyArgs>(
      args: SelectSubset<T, OrganizerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizers and returns the data updated in the database.
     * @param {OrganizerUpdateManyAndReturnArgs} args - Arguments to update many Organizers.
     * @example
     * // Update many Organizers
     * const organizer = await prisma.organizer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Organizers and only return the `id`
     * const organizerWithIdOnly = await prisma.organizer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends OrganizerUpdateManyAndReturnArgs>(
      args: SelectSubset<T, OrganizerUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Organizer.
     * @param {OrganizerUpsertArgs} args - Arguments to update or create a Organizer.
     * @example
     * // Update or create a Organizer
     * const organizer = await prisma.organizer.upsert({
     *   create: {
     *     // ... data to create a Organizer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizer we want to update
     *   }
     * })
     */
    upsert<T extends OrganizerUpsertArgs>(
      args: SelectSubset<T, OrganizerUpsertArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerCountArgs} args - Arguments to filter Organizers to count.
     * @example
     * // Count the number of Organizers
     * const count = await prisma.organizer.count({
     *   where: {
     *     // ... the filter for the Organizers we want to count
     *   }
     * })
     **/
    count<T extends OrganizerCountArgs>(
      args?: Subset<T, OrganizerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], OrganizerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organizer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrganizerAggregateArgs>(
      args: Subset<T, OrganizerAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizerAggregateType<T>>;

    /**
     * Group by Organizer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends OrganizerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizerGroupByArgs["orderBy"] }
        : { orderBy?: OrganizerGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OrganizerGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetOrganizerGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Organizer model
     */
    readonly fields: OrganizerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organizer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      | $Result.GetResult<
          Prisma.$OrganizationPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AccountDefaultArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      | $Result.GetResult<
          Prisma.$AccountPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Organizer model
   */
  interface OrganizerFieldRefs {
    readonly id: FieldRef<"Organizer", "String">;
    readonly accountId: FieldRef<"Organizer", "String">;
    readonly organizationId: FieldRef<"Organizer", "String">;
    readonly createdAt: FieldRef<"Organizer", "DateTime">;
    readonly updatedAt: FieldRef<"Organizer", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Organizer findUnique
   */
  export type OrganizerFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * Filter, which Organizer to fetch.
     */
    where: OrganizerWhereUniqueInput;
  };

  /**
   * Organizer findUniqueOrThrow
   */
  export type OrganizerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * Filter, which Organizer to fetch.
     */
    where: OrganizerWhereUniqueInput;
  };

  /**
   * Organizer findFirst
   */
  export type OrganizerFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * Filter, which Organizer to fetch.
     */
    where?: OrganizerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizers to fetch.
     */
    orderBy?:
      | OrganizerOrderByWithRelationInput
      | OrganizerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Organizers.
     */
    cursor?: OrganizerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Organizers.
     */
    distinct?: OrganizerScalarFieldEnum | OrganizerScalarFieldEnum[];
  };

  /**
   * Organizer findFirstOrThrow
   */
  export type OrganizerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * Filter, which Organizer to fetch.
     */
    where?: OrganizerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizers to fetch.
     */
    orderBy?:
      | OrganizerOrderByWithRelationInput
      | OrganizerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Organizers.
     */
    cursor?: OrganizerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Organizers.
     */
    distinct?: OrganizerScalarFieldEnum | OrganizerScalarFieldEnum[];
  };

  /**
   * Organizer findMany
   */
  export type OrganizerFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * Filter, which Organizers to fetch.
     */
    where?: OrganizerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizers to fetch.
     */
    orderBy?:
      | OrganizerOrderByWithRelationInput
      | OrganizerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Organizers.
     */
    cursor?: OrganizerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizers.
     */
    skip?: number;
    distinct?: OrganizerScalarFieldEnum | OrganizerScalarFieldEnum[];
  };

  /**
   * Organizer create
   */
  export type OrganizerCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * The data needed to create a Organizer.
     */
    data: XOR<OrganizerCreateInput, OrganizerUncheckedCreateInput>;
  };

  /**
   * Organizer createMany
   */
  export type OrganizerCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Organizers.
     */
    data: OrganizerCreateManyInput | OrganizerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Organizer createManyAndReturn
   */
  export type OrganizerCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * The data used to create many Organizers.
     */
    data: OrganizerCreateManyInput | OrganizerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Organizer update
   */
  export type OrganizerUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * The data needed to update a Organizer.
     */
    data: XOR<OrganizerUpdateInput, OrganizerUncheckedUpdateInput>;
    /**
     * Choose, which Organizer to update.
     */
    where: OrganizerWhereUniqueInput;
  };

  /**
   * Organizer updateMany
   */
  export type OrganizerUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Organizers.
     */
    data: XOR<
      OrganizerUpdateManyMutationInput,
      OrganizerUncheckedUpdateManyInput
    >;
    /**
     * Filter which Organizers to update
     */
    where?: OrganizerWhereInput;
    /**
     * Limit how many Organizers to update.
     */
    limit?: number;
  };

  /**
   * Organizer updateManyAndReturn
   */
  export type OrganizerUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * The data used to update Organizers.
     */
    data: XOR<
      OrganizerUpdateManyMutationInput,
      OrganizerUncheckedUpdateManyInput
    >;
    /**
     * Filter which Organizers to update
     */
    where?: OrganizerWhereInput;
    /**
     * Limit how many Organizers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Organizer upsert
   */
  export type OrganizerUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * The filter to search for the Organizer to update in case it exists.
     */
    where: OrganizerWhereUniqueInput;
    /**
     * In case the Organizer found by the `where` argument doesn't exist, create a new Organizer with this data.
     */
    create: XOR<OrganizerCreateInput, OrganizerUncheckedCreateInput>;
    /**
     * In case the Organizer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizerUpdateInput, OrganizerUncheckedUpdateInput>;
  };

  /**
   * Organizer delete
   */
  export type OrganizerDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * Filter which Organizer to delete.
     */
    where: OrganizerWhereUniqueInput;
  };

  /**
   * Organizer deleteMany
   */
  export type OrganizerDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Organizers to delete
     */
    where?: OrganizerWhereInput;
    /**
     * Limit how many Organizers to delete.
     */
    limit?: number;
  };

  /**
   * Organizer without action
   */
  export type OrganizerDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
  };

  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null;
    _avg: EventAvgAggregateOutputType | null;
    _sum: EventSumAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
  };

  export type EventAvgAggregateOutputType = {
    duration: number | null;
  };

  export type EventSumAggregateOutputType = {
    duration: number | null;
  };

  export type EventMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    bannerUrl: string | null;
    location: string | null;
    venue: string | null;
    currency: $Enums.Currency | null;
    onDate: Date | null;
    timezone: string | null;
    duration: number | null;
    eventType: $Enums.EventType | null;
    eventStatus: $Enums.EventStatus | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type EventMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    bannerUrl: string | null;
    location: string | null;
    venue: string | null;
    currency: $Enums.Currency | null;
    onDate: Date | null;
    timezone: string | null;
    duration: number | null;
    eventType: $Enums.EventType | null;
    eventStatus: $Enums.EventStatus | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type EventCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    bannerUrl: number;
    gallery: number;
    location: number;
    venue: number;
    currency: number;
    onDate: number;
    timezone: number;
    duration: number;
    eventType: number;
    eventStatus: number;
    organizationId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type EventAvgAggregateInputType = {
    duration?: true;
  };

  export type EventSumAggregateInputType = {
    duration?: true;
  };

  export type EventMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    bannerUrl?: true;
    location?: true;
    venue?: true;
    currency?: true;
    onDate?: true;
    timezone?: true;
    duration?: true;
    eventType?: true;
    eventStatus?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type EventMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    bannerUrl?: true;
    location?: true;
    venue?: true;
    currency?: true;
    onDate?: true;
    timezone?: true;
    duration?: true;
    eventType?: true;
    eventStatus?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type EventCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    bannerUrl?: true;
    gallery?: true;
    location?: true;
    venue?: true;
    currency?: true;
    onDate?: true;
    timezone?: true;
    duration?: true;
    eventType?: true;
    eventStatus?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type EventAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Events
     **/
    _count?: true | EventCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: EventAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: EventSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EventMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EventMaxAggregateInputType;
  };

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
    [P in keyof T & keyof AggregateEvent]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>;
  };

  export type EventGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EventWhereInput;
    orderBy?:
      | EventOrderByWithAggregationInput
      | EventOrderByWithAggregationInput[];
    by: EventScalarFieldEnum[] | EventScalarFieldEnum;
    having?: EventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventCountAggregateInputType | true;
    _avg?: EventAvgAggregateInputType;
    _sum?: EventSumAggregateInputType;
    _min?: EventMinAggregateInputType;
    _max?: EventMaxAggregateInputType;
  };

  export type EventGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    bannerUrl: string | null;
    gallery: string[];
    location: string;
    venue: string;
    currency: $Enums.Currency;
    onDate: Date;
    timezone: string;
    duration: number;
    eventType: $Enums.EventType;
    eventStatus: $Enums.EventStatus;
    organizationId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: EventCountAggregateOutputType | null;
    _avg: EventAvgAggregateOutputType | null;
    _sum: EventSumAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
  };

  type GetEventGroupByPayload<T extends EventGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<EventGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof EventGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>;
        }
      >
    >;

  export type EventSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      bannerUrl?: boolean;
      gallery?: boolean;
      location?: boolean;
      venue?: boolean;
      currency?: boolean;
      onDate?: boolean;
      timezone?: boolean;
      duration?: boolean;
      eventType?: boolean;
      eventStatus?: boolean;
      organizationId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      ticketTypes?: boolean | Event$ticketTypesArgs<ExtArgs>;
      reviews?: boolean | Event$reviewsArgs<ExtArgs>;
      _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["event"]
  >;

  export type EventSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      bannerUrl?: boolean;
      gallery?: boolean;
      location?: boolean;
      venue?: boolean;
      currency?: boolean;
      onDate?: boolean;
      timezone?: boolean;
      duration?: boolean;
      eventType?: boolean;
      eventStatus?: boolean;
      organizationId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["event"]
  >;

  export type EventSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      bannerUrl?: boolean;
      gallery?: boolean;
      location?: boolean;
      venue?: boolean;
      currency?: boolean;
      onDate?: boolean;
      timezone?: boolean;
      duration?: boolean;
      eventType?: boolean;
      eventStatus?: boolean;
      organizationId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["event"]
  >;

  export type EventSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    bannerUrl?: boolean;
    gallery?: boolean;
    location?: boolean;
    venue?: boolean;
    currency?: boolean;
    onDate?: boolean;
    timezone?: boolean;
    duration?: boolean;
    eventType?: boolean;
    eventStatus?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type EventOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "title"
    | "description"
    | "bannerUrl"
    | "gallery"
    | "location"
    | "venue"
    | "currency"
    | "onDate"
    | "timezone"
    | "duration"
    | "eventType"
    | "eventStatus"
    | "organizationId"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["event"]
  >;
  export type EventInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    ticketTypes?: boolean | Event$ticketTypesArgs<ExtArgs>;
    reviews?: boolean | Event$reviewsArgs<ExtArgs>;
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type EventIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
  };
  export type EventIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
  };

  export type $EventPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Event";
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>;
      ticketTypes: Prisma.$TicketTypePayload<ExtArgs>[];
      reviews: Prisma.$ReviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string;
        bannerUrl: string | null;
        gallery: string[];
        location: string;
        venue: string;
        currency: $Enums.Currency;
        onDate: Date;
        timezone: string;
        duration: number;
        eventType: $Enums.EventType;
        eventStatus: $Enums.EventStatus;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["event"]
    >;
    composites: {};
  };

  type EventGetPayload<
    S extends boolean | null | undefined | EventDefaultArgs,
  > = $Result.GetResult<Prisma.$EventPayload, S>;

  type EventCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<EventFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: EventCountAggregateInputType | true;
  };

  export interface EventDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Event"];
      meta: { name: "Event" };
    };
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(
      args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(
      args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(
      args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     *
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventFindManyArgs>(
      args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     *
     */
    create<T extends EventCreateArgs>(
      args: SelectSubset<T, EventCreateArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventCreateManyArgs>(
      args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(
      args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     *
     */
    delete<T extends EventDeleteArgs>(
      args: SelectSubset<T, EventDeleteArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventUpdateArgs>(
      args: SelectSubset<T, EventUpdateArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventDeleteManyArgs>(
      args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventUpdateManyArgs>(
      args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(
      args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(
      args: SelectSubset<T, EventUpsertArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
     **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], EventCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EventAggregateArgs>(
      args: Subset<T, EventAggregateArgs>,
    ): Prisma.PrismaPromise<GetEventAggregateType<T>>;

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs["orderBy"] }
        : { orderBy?: EventGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetEventGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Event model
     */
    readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      | $Result.GetResult<
          Prisma.$OrganizationPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    ticketTypes<T extends Event$ticketTypesArgs<ExtArgs> = {}>(
      args?: Subset<T, Event$ticketTypesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TicketTypePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    reviews<T extends Event$reviewsArgs<ExtArgs> = {}>(
      args?: Subset<T, Event$reviewsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ReviewPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", "String">;
    readonly title: FieldRef<"Event", "String">;
    readonly description: FieldRef<"Event", "String">;
    readonly bannerUrl: FieldRef<"Event", "String">;
    readonly gallery: FieldRef<"Event", "String[]">;
    readonly location: FieldRef<"Event", "String">;
    readonly venue: FieldRef<"Event", "String">;
    readonly currency: FieldRef<"Event", "Currency">;
    readonly onDate: FieldRef<"Event", "DateTime">;
    readonly timezone: FieldRef<"Event", "String">;
    readonly duration: FieldRef<"Event", "Float">;
    readonly eventType: FieldRef<"Event", "EventType">;
    readonly eventStatus: FieldRef<"Event", "EventStatus">;
    readonly organizationId: FieldRef<"Event", "String">;
    readonly createdAt: FieldRef<"Event", "DateTime">;
    readonly updatedAt: FieldRef<"Event", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput;
  };

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput;
  };

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * Event findMany
   */
  export type EventFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * Event create
   */
  export type EventCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>;
  };

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Event update
   */
  export type EventUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>;
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput;
  };

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>;
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput;
    /**
     * Limit how many Events to update.
     */
    limit?: number;
  };

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>;
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput;
    /**
     * Limit how many Events to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Event upsert
   */
  export type EventUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput;
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>;
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>;
  };

  /**
   * Event delete
   */
  export type EventDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput;
  };

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput;
    /**
     * Limit how many Events to delete.
     */
    limit?: number;
  };

  /**
   * Event.ticketTypes
   */
  export type Event$ticketTypesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null;
    where?: TicketTypeWhereInput;
    orderBy?:
      | TicketTypeOrderByWithRelationInput
      | TicketTypeOrderByWithRelationInput[];
    cursor?: TicketTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[];
  };

  /**
   * Event.reviews
   */
  export type Event$reviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    cursor?: ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * Event without action
   */
  export type EventDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
  };

  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  export type ReviewAvgAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewSumAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewMinAggregateOutputType = {
    id: string | null;
    rating: number | null;
    message: string | null;
    eventId: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ReviewMaxAggregateOutputType = {
    id: string | null;
    rating: number | null;
    message: string | null;
    eventId: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ReviewCountAggregateOutputType = {
    id: number;
    rating: number;
    message: number;
    eventId: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ReviewAvgAggregateInputType = {
    rating?: true;
  };

  export type ReviewSumAggregateInputType = {
    rating?: true;
  };

  export type ReviewMinAggregateInputType = {
    id?: true;
    rating?: true;
    message?: true;
    eventId?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ReviewMaxAggregateInputType = {
    id?: true;
    rating?: true;
    message?: true;
    eventId?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ReviewCountAggregateInputType = {
    id?: true;
    rating?: true;
    message?: true;
    eventId?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ReviewAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Reviews
     **/
    _count?: true | ReviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ReviewAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ReviewSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReviewMaxAggregateInputType;
  };

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateReview]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>;
  };

  export type ReviewGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReviewWhereInput;
    orderBy?:
      | ReviewOrderByWithAggregationInput
      | ReviewOrderByWithAggregationInput[];
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum;
    having?: ReviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewCountAggregateInputType | true;
    _avg?: ReviewAvgAggregateInputType;
    _sum?: ReviewSumAggregateInputType;
    _min?: ReviewMinAggregateInputType;
    _max?: ReviewMaxAggregateInputType;
  };

  export type ReviewGroupByOutputType = {
    id: string;
    rating: number;
    message: string | null;
    eventId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ReviewGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ReviewGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>;
        }
      >
    >;

  export type ReviewSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      rating?: boolean;
      message?: boolean;
      eventId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      event?: boolean | EventDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["review"]
  >;

  export type ReviewSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      rating?: boolean;
      message?: boolean;
      eventId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      event?: boolean | EventDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["review"]
  >;

  export type ReviewSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      rating?: boolean;
      message?: boolean;
      eventId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      event?: boolean | EventDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["review"]
  >;

  export type ReviewSelectScalar = {
    id?: boolean;
    rating?: boolean;
    message?: boolean;
    eventId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ReviewOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "rating"
    | "message"
    | "eventId"
    | "userId"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["review"]
  >;
  export type ReviewInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    event?: boolean | EventDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ReviewIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    event?: boolean | EventDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ReviewIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    event?: boolean | EventDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ReviewPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Review";
    objects: {
      event: Prisma.$EventPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        rating: number;
        message: string | null;
        eventId: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["review"]
    >;
    composites: {};
  };

  type ReviewGetPayload<
    S extends boolean | null | undefined | ReviewDefaultArgs,
  > = $Result.GetResult<Prisma.$ReviewPayload, S>;

  type ReviewCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ReviewFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: ReviewCountAggregateInputType | true;
  };

  export interface ReviewDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Review"];
      meta: { name: "Review" };
    };
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(
      args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>,
    ): Prisma__ReviewClient<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ReviewClient<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(
      args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>,
    ): Prisma__ReviewClient<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ReviewClient<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     *
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ReviewFindManyArgs>(
      args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     *
     */
    create<T extends ReviewCreateArgs>(
      args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>,
    ): Prisma__ReviewClient<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ReviewCreateManyArgs>(
      args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     *
     */
    delete<T extends ReviewDeleteArgs>(
      args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>,
    ): Prisma__ReviewClient<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ReviewUpdateArgs>(
      args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>,
    ): Prisma__ReviewClient<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ReviewDeleteManyArgs>(
      args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ReviewUpdateManyArgs>(
      args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(
      args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>,
    ): Prisma__ReviewClient<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
     **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ReviewCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ReviewAggregateArgs>(
      args: Subset<T, ReviewAggregateArgs>,
    ): Prisma.PrismaPromise<GetReviewAggregateType<T>>;

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs["orderBy"] }
        : { orderBy?: ReviewGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetReviewGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Review model
     */
    readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    event<T extends EventDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, EventDefaultArgs<ExtArgs>>,
    ): Prisma__EventClient<
      | $Result.GetResult<
          Prisma.$EventPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", "String">;
    readonly rating: FieldRef<"Review", "Int">;
    readonly message: FieldRef<"Review", "String">;
    readonly eventId: FieldRef<"Review", "String">;
    readonly userId: FieldRef<"Review", "String">;
    readonly createdAt: FieldRef<"Review", "DateTime">;
    readonly updatedAt: FieldRef<"Review", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput;
  };

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput;
  };

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * Review create
   */
  export type ReviewCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>;
  };

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Review update
   */
  export type ReviewUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>;
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput;
  };

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>;
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput;
    /**
     * Limit how many Reviews to update.
     */
    limit?: number;
  };

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>;
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput;
    /**
     * Limit how many Reviews to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput;
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>;
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>;
  };

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput;
  };

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput;
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number;
  };

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
  };

  /**
   * Model TicketType
   */

  export type AggregateTicketType = {
    _count: TicketTypeCountAggregateOutputType | null;
    _avg: TicketTypeAvgAggregateOutputType | null;
    _sum: TicketTypeSumAggregateOutputType | null;
    _min: TicketTypeMinAggregateOutputType | null;
    _max: TicketTypeMaxAggregateOutputType | null;
  };

  export type TicketTypeAvgAggregateOutputType = {
    total: number | null;
    locked: number | null;
    booked: number | null;
    price: number | null;
  };

  export type TicketTypeSumAggregateOutputType = {
    total: number | null;
    locked: number | null;
    booked: number | null;
    price: number | null;
  };

  export type TicketTypeMinAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    name: string | null;
    description: string | null;
    total: number | null;
    locked: number | null;
    booked: number | null;
    price: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type TicketTypeMaxAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    name: string | null;
    description: string | null;
    total: number | null;
    locked: number | null;
    booked: number | null;
    price: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type TicketTypeCountAggregateOutputType = {
    id: number;
    eventId: number;
    name: number;
    description: number;
    total: number;
    locked: number;
    booked: number;
    price: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type TicketTypeAvgAggregateInputType = {
    total?: true;
    locked?: true;
    booked?: true;
    price?: true;
  };

  export type TicketTypeSumAggregateInputType = {
    total?: true;
    locked?: true;
    booked?: true;
    price?: true;
  };

  export type TicketTypeMinAggregateInputType = {
    id?: true;
    eventId?: true;
    name?: true;
    description?: true;
    total?: true;
    locked?: true;
    booked?: true;
    price?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type TicketTypeMaxAggregateInputType = {
    id?: true;
    eventId?: true;
    name?: true;
    description?: true;
    total?: true;
    locked?: true;
    booked?: true;
    price?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type TicketTypeCountAggregateInputType = {
    id?: true;
    eventId?: true;
    name?: true;
    description?: true;
    total?: true;
    locked?: true;
    booked?: true;
    price?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type TicketTypeAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TicketType to aggregate.
     */
    where?: TicketTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?:
      | TicketTypeOrderByWithRelationInput
      | TicketTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TicketTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TicketTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TicketTypes
     **/
    _count?: true | TicketTypeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TicketTypeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TicketTypeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TicketTypeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TicketTypeMaxAggregateInputType;
  };

  export type GetTicketTypeAggregateType<T extends TicketTypeAggregateArgs> = {
    [P in keyof T & keyof AggregateTicketType]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketType[P]>
      : GetScalarType<T[P], AggregateTicketType[P]>;
  };

  export type TicketTypeGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TicketTypeWhereInput;
    orderBy?:
      | TicketTypeOrderByWithAggregationInput
      | TicketTypeOrderByWithAggregationInput[];
    by: TicketTypeScalarFieldEnum[] | TicketTypeScalarFieldEnum;
    having?: TicketTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TicketTypeCountAggregateInputType | true;
    _avg?: TicketTypeAvgAggregateInputType;
    _sum?: TicketTypeSumAggregateInputType;
    _min?: TicketTypeMinAggregateInputType;
    _max?: TicketTypeMaxAggregateInputType;
  };

  export type TicketTypeGroupByOutputType = {
    id: string;
    eventId: string;
    name: string;
    description: string | null;
    total: number;
    locked: number;
    booked: number;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    _count: TicketTypeCountAggregateOutputType | null;
    _avg: TicketTypeAvgAggregateOutputType | null;
    _sum: TicketTypeSumAggregateOutputType | null;
    _min: TicketTypeMinAggregateOutputType | null;
    _max: TicketTypeMaxAggregateOutputType | null;
  };

  type GetTicketTypeGroupByPayload<T extends TicketTypeGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TicketTypeGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof TicketTypeGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TicketTypeGroupByOutputType[P]>;
        }
      >
    >;

  export type TicketTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      eventId?: boolean;
      name?: boolean;
      description?: boolean;
      total?: boolean;
      locked?: boolean;
      booked?: boolean;
      price?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      event?: boolean | EventDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["ticketType"]
  >;

  export type TicketTypeSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      eventId?: boolean;
      name?: boolean;
      description?: boolean;
      total?: boolean;
      locked?: boolean;
      booked?: boolean;
      price?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      event?: boolean | EventDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["ticketType"]
  >;

  export type TicketTypeSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      eventId?: boolean;
      name?: boolean;
      description?: boolean;
      total?: boolean;
      locked?: boolean;
      booked?: boolean;
      price?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      event?: boolean | EventDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["ticketType"]
  >;

  export type TicketTypeSelectScalar = {
    id?: boolean;
    eventId?: boolean;
    name?: boolean;
    description?: boolean;
    total?: boolean;
    locked?: boolean;
    booked?: boolean;
    price?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type TicketTypeOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "eventId"
    | "name"
    | "description"
    | "total"
    | "locked"
    | "booked"
    | "price"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["ticketType"]
  >;
  export type TicketTypeInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    event?: boolean | EventDefaultArgs<ExtArgs>;
  };
  export type TicketTypeIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    event?: boolean | EventDefaultArgs<ExtArgs>;
  };
  export type TicketTypeIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    event?: boolean | EventDefaultArgs<ExtArgs>;
  };

  export type $TicketTypePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "TicketType";
    objects: {
      event: Prisma.$EventPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        eventId: string;
        name: string;
        description: string | null;
        total: number;
        locked: number;
        booked: number;
        price: number;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["ticketType"]
    >;
    composites: {};
  };

  type TicketTypeGetPayload<
    S extends boolean | null | undefined | TicketTypeDefaultArgs,
  > = $Result.GetResult<Prisma.$TicketTypePayload, S>;

  type TicketTypeCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    TicketTypeFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: TicketTypeCountAggregateInputType | true;
  };

  export interface TicketTypeDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["TicketType"];
      meta: { name: "TicketType" };
    };
    /**
     * Find zero or one TicketType that matches the filter.
     * @param {TicketTypeFindUniqueArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketTypeFindUniqueArgs>(
      args: SelectSubset<T, TicketTypeFindUniqueArgs<ExtArgs>>,
    ): Prisma__TicketTypeClient<
      $Result.GetResult<
        Prisma.$TicketTypePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one TicketType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketTypeFindUniqueOrThrowArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketTypeFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TicketTypeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TicketTypeClient<
      $Result.GetResult<
        Prisma.$TicketTypePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TicketType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindFirstArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketTypeFindFirstArgs>(
      args?: SelectSubset<T, TicketTypeFindFirstArgs<ExtArgs>>,
    ): Prisma__TicketTypeClient<
      $Result.GetResult<
        Prisma.$TicketTypePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TicketType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindFirstOrThrowArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketTypeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TicketTypeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TicketTypeClient<
      $Result.GetResult<
        Prisma.$TicketTypePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more TicketTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketTypes
     * const ticketTypes = await prisma.ticketType.findMany()
     *
     * // Get first 10 TicketTypes
     * const ticketTypes = await prisma.ticketType.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ticketTypeWithIdOnly = await prisma.ticketType.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TicketTypeFindManyArgs>(
      args?: SelectSubset<T, TicketTypeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TicketTypePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a TicketType.
     * @param {TicketTypeCreateArgs} args - Arguments to create a TicketType.
     * @example
     * // Create one TicketType
     * const TicketType = await prisma.ticketType.create({
     *   data: {
     *     // ... data to create a TicketType
     *   }
     * })
     *
     */
    create<T extends TicketTypeCreateArgs>(
      args: SelectSubset<T, TicketTypeCreateArgs<ExtArgs>>,
    ): Prisma__TicketTypeClient<
      $Result.GetResult<
        Prisma.$TicketTypePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many TicketTypes.
     * @param {TicketTypeCreateManyArgs} args - Arguments to create many TicketTypes.
     * @example
     * // Create many TicketTypes
     * const ticketType = await prisma.ticketType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TicketTypeCreateManyArgs>(
      args?: SelectSubset<T, TicketTypeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many TicketTypes and returns the data saved in the database.
     * @param {TicketTypeCreateManyAndReturnArgs} args - Arguments to create many TicketTypes.
     * @example
     * // Create many TicketTypes
     * const ticketType = await prisma.ticketType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TicketTypes and only return the `id`
     * const ticketTypeWithIdOnly = await prisma.ticketType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TicketTypeCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TicketTypeCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TicketTypePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a TicketType.
     * @param {TicketTypeDeleteArgs} args - Arguments to delete one TicketType.
     * @example
     * // Delete one TicketType
     * const TicketType = await prisma.ticketType.delete({
     *   where: {
     *     // ... filter to delete one TicketType
     *   }
     * })
     *
     */
    delete<T extends TicketTypeDeleteArgs>(
      args: SelectSubset<T, TicketTypeDeleteArgs<ExtArgs>>,
    ): Prisma__TicketTypeClient<
      $Result.GetResult<
        Prisma.$TicketTypePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one TicketType.
     * @param {TicketTypeUpdateArgs} args - Arguments to update one TicketType.
     * @example
     * // Update one TicketType
     * const ticketType = await prisma.ticketType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TicketTypeUpdateArgs>(
      args: SelectSubset<T, TicketTypeUpdateArgs<ExtArgs>>,
    ): Prisma__TicketTypeClient<
      $Result.GetResult<
        Prisma.$TicketTypePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more TicketTypes.
     * @param {TicketTypeDeleteManyArgs} args - Arguments to filter TicketTypes to delete.
     * @example
     * // Delete a few TicketTypes
     * const { count } = await prisma.ticketType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TicketTypeDeleteManyArgs>(
      args?: SelectSubset<T, TicketTypeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TicketTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketTypes
     * const ticketType = await prisma.ticketType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TicketTypeUpdateManyArgs>(
      args: SelectSubset<T, TicketTypeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TicketTypes and returns the data updated in the database.
     * @param {TicketTypeUpdateManyAndReturnArgs} args - Arguments to update many TicketTypes.
     * @example
     * // Update many TicketTypes
     * const ticketType = await prisma.ticketType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TicketTypes and only return the `id`
     * const ticketTypeWithIdOnly = await prisma.ticketType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TicketTypeUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TicketTypeUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TicketTypePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one TicketType.
     * @param {TicketTypeUpsertArgs} args - Arguments to update or create a TicketType.
     * @example
     * // Update or create a TicketType
     * const ticketType = await prisma.ticketType.upsert({
     *   create: {
     *     // ... data to create a TicketType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketType we want to update
     *   }
     * })
     */
    upsert<T extends TicketTypeUpsertArgs>(
      args: SelectSubset<T, TicketTypeUpsertArgs<ExtArgs>>,
    ): Prisma__TicketTypeClient<
      $Result.GetResult<
        Prisma.$TicketTypePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of TicketTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeCountArgs} args - Arguments to filter TicketTypes to count.
     * @example
     * // Count the number of TicketTypes
     * const count = await prisma.ticketType.count({
     *   where: {
     *     // ... the filter for the TicketTypes we want to count
     *   }
     * })
     **/
    count<T extends TicketTypeCountArgs>(
      args?: Subset<T, TicketTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], TicketTypeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a TicketType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TicketTypeAggregateArgs>(
      args: Subset<T, TicketTypeAggregateArgs>,
    ): Prisma.PrismaPromise<GetTicketTypeAggregateType<T>>;

    /**
     * Group by TicketType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TicketTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketTypeGroupByArgs["orderBy"] }
        : { orderBy?: TicketTypeGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TicketTypeGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetTicketTypeGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TicketType model
     */
    readonly fields: TicketTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketTypeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    event<T extends EventDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, EventDefaultArgs<ExtArgs>>,
    ): Prisma__EventClient<
      | $Result.GetResult<
          Prisma.$EventPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the TicketType model
   */
  interface TicketTypeFieldRefs {
    readonly id: FieldRef<"TicketType", "String">;
    readonly eventId: FieldRef<"TicketType", "String">;
    readonly name: FieldRef<"TicketType", "String">;
    readonly description: FieldRef<"TicketType", "String">;
    readonly total: FieldRef<"TicketType", "Int">;
    readonly locked: FieldRef<"TicketType", "Int">;
    readonly booked: FieldRef<"TicketType", "Int">;
    readonly price: FieldRef<"TicketType", "Float">;
    readonly createdAt: FieldRef<"TicketType", "DateTime">;
    readonly updatedAt: FieldRef<"TicketType", "DateTime">;
  }

  // Custom InputTypes
  /**
   * TicketType findUnique
   */
  export type TicketTypeFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null;
    /**
     * Filter, which TicketType to fetch.
     */
    where: TicketTypeWhereUniqueInput;
  };

  /**
   * TicketType findUniqueOrThrow
   */
  export type TicketTypeFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null;
    /**
     * Filter, which TicketType to fetch.
     */
    where: TicketTypeWhereUniqueInput;
  };

  /**
   * TicketType findFirst
   */
  export type TicketTypeFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null;
    /**
     * Filter, which TicketType to fetch.
     */
    where?: TicketTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?:
      | TicketTypeOrderByWithRelationInput
      | TicketTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TicketTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TicketTypes.
     */
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[];
  };

  /**
   * TicketType findFirstOrThrow
   */
  export type TicketTypeFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null;
    /**
     * Filter, which TicketType to fetch.
     */
    where?: TicketTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?:
      | TicketTypeOrderByWithRelationInput
      | TicketTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TicketTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TicketTypes.
     */
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[];
  };

  /**
   * TicketType findMany
   */
  export type TicketTypeFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null;
    /**
     * Filter, which TicketTypes to fetch.
     */
    where?: TicketTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?:
      | TicketTypeOrderByWithRelationInput
      | TicketTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TicketTypes.
     */
    skip?: number;
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[];
  };

  /**
   * TicketType create
   */
  export type TicketTypeCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null;
    /**
     * The data needed to create a TicketType.
     */
    data: XOR<TicketTypeCreateInput, TicketTypeUncheckedCreateInput>;
  };

  /**
   * TicketType createMany
   */
  export type TicketTypeCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many TicketTypes.
     */
    data: TicketTypeCreateManyInput | TicketTypeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TicketType createManyAndReturn
   */
  export type TicketTypeCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null;
    /**
     * The data used to create many TicketTypes.
     */
    data: TicketTypeCreateManyInput | TicketTypeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TicketType update
   */
  export type TicketTypeUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null;
    /**
     * The data needed to update a TicketType.
     */
    data: XOR<TicketTypeUpdateInput, TicketTypeUncheckedUpdateInput>;
    /**
     * Choose, which TicketType to update.
     */
    where: TicketTypeWhereUniqueInput;
  };

  /**
   * TicketType updateMany
   */
  export type TicketTypeUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update TicketTypes.
     */
    data: XOR<
      TicketTypeUpdateManyMutationInput,
      TicketTypeUncheckedUpdateManyInput
    >;
    /**
     * Filter which TicketTypes to update
     */
    where?: TicketTypeWhereInput;
    /**
     * Limit how many TicketTypes to update.
     */
    limit?: number;
  };

  /**
   * TicketType updateManyAndReturn
   */
  export type TicketTypeUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null;
    /**
     * The data used to update TicketTypes.
     */
    data: XOR<
      TicketTypeUpdateManyMutationInput,
      TicketTypeUncheckedUpdateManyInput
    >;
    /**
     * Filter which TicketTypes to update
     */
    where?: TicketTypeWhereInput;
    /**
     * Limit how many TicketTypes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TicketType upsert
   */
  export type TicketTypeUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null;
    /**
     * The filter to search for the TicketType to update in case it exists.
     */
    where: TicketTypeWhereUniqueInput;
    /**
     * In case the TicketType found by the `where` argument doesn't exist, create a new TicketType with this data.
     */
    create: XOR<TicketTypeCreateInput, TicketTypeUncheckedCreateInput>;
    /**
     * In case the TicketType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketTypeUpdateInput, TicketTypeUncheckedUpdateInput>;
  };

  /**
   * TicketType delete
   */
  export type TicketTypeDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null;
    /**
     * Filter which TicketType to delete.
     */
    where: TicketTypeWhereUniqueInput;
  };

  /**
   * TicketType deleteMany
   */
  export type TicketTypeDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TicketTypes to delete
     */
    where?: TicketTypeWhereInput;
    /**
     * Limit how many TicketTypes to delete.
     */
    limit?: number;
  };

  /**
   * TicketType without action
   */
  export type TicketTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null;
  };

  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
  };

  export type NotificationMinAggregateOutputType = {
    id: string | null;
  };

  export type NotificationMaxAggregateOutputType = {
    id: string | null;
  };

  export type NotificationCountAggregateOutputType = {
    id: number;
    _all: number;
  };

  export type NotificationMinAggregateInputType = {
    id?: true;
  };

  export type NotificationMaxAggregateInputType = {
    id?: true;
  };

  export type NotificationCountAggregateInputType = {
    id?: true;
    _all?: true;
  };

  export type NotificationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Notifications
     **/
    _count?: true | NotificationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: NotificationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: NotificationMaxAggregateInputType;
  };

  export type GetNotificationAggregateType<
    T extends NotificationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateNotification]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>;
  };

  export type NotificationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotificationWhereInput;
    orderBy?:
      | NotificationOrderByWithAggregationInput
      | NotificationOrderByWithAggregationInput[];
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum;
    having?: NotificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationCountAggregateInputType | true;
    _min?: NotificationMinAggregateInputType;
    _max?: NotificationMaxAggregateInputType;
  };

  export type NotificationGroupByOutputType = {
    id: string;
    _count: NotificationCountAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
  };

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<NotificationGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof NotificationGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>;
        }
      >
    >;

  export type NotificationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["notification"]
  >;

  export type NotificationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["notification"]
  >;

  export type NotificationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["notification"]
  >;

  export type NotificationSelectScalar = {
    id?: boolean;
  };

  export type NotificationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<"id", ExtArgs["result"]["notification"]>;

  export type $NotificationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Notification";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
      },
      ExtArgs["result"]["notification"]
    >;
    composites: {};
  };

  type NotificationGetPayload<
    S extends boolean | null | undefined | NotificationDefaultArgs,
  > = $Result.GetResult<Prisma.$NotificationPayload, S>;

  type NotificationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    NotificationFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: NotificationCountAggregateInputType | true;
  };

  export interface NotificationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Notification"];
      meta: { name: "Notification" };
    };
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(
      args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(
      args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     *
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     *
     */
    findMany<T extends NotificationFindManyArgs>(
      args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     *
     */
    create<T extends NotificationCreateArgs>(
      args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NotificationCreateManyArgs>(
      args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     *
     */
    delete<T extends NotificationDeleteArgs>(
      args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NotificationUpdateArgs>(
      args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NotificationDeleteManyArgs>(
      args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NotificationUpdateManyArgs>(
      args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(
      args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
     **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], NotificationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends NotificationAggregateArgs>(
      args: Subset<T, NotificationAggregateArgs>,
    ): Prisma.PrismaPromise<GetNotificationAggregateType<T>>;

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs["orderBy"] }
        : { orderBy?: NotificationGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetNotificationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Notification model
     */
    readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", "String">;
  }

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Notification create
   */
  export type NotificationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * The data needed to create a Notification.
     */
    data?: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>;
  };

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>;
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput;
    /**
     * Limit how many Notifications to update.
     */
    limit?: number;
  };

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * The data used to update Notifications.
     */
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput;
    /**
     * Limit how many Notifications to update.
     */
    limit?: number;
  };

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput;
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>;
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>;
  };

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput;
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number;
  };

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
  };

  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  export type BookingMinAggregateOutputType = {
    id: string | null;
  };

  export type BookingMaxAggregateOutputType = {
    id: string | null;
  };

  export type BookingCountAggregateOutputType = {
    id: number;
    _all: number;
  };

  export type BookingMinAggregateInputType = {
    id?: true;
  };

  export type BookingMaxAggregateInputType = {
    id?: true;
  };

  export type BookingCountAggregateInputType = {
    id?: true;
    _all?: true;
  };

  export type BookingAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bookings to fetch.
     */
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Bookings
     **/
    _count?: true | BookingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookingMaxAggregateInputType;
  };

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
    [P in keyof T & keyof AggregateBooking]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>;
  };

  export type BookingGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BookingWhereInput;
    orderBy?:
      | BookingOrderByWithAggregationInput
      | BookingOrderByWithAggregationInput[];
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum;
    having?: BookingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookingCountAggregateInputType | true;
    _min?: BookingMinAggregateInputType;
    _max?: BookingMaxAggregateInputType;
  };

  export type BookingGroupByOutputType = {
    id: string;
    _count: BookingCountAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BookingGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof BookingGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>;
        }
      >
    >;

  export type BookingSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["booking"]
  >;

  export type BookingSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["booking"]
  >;

  export type BookingSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["booking"]
  >;

  export type BookingSelectScalar = {
    id?: boolean;
  };

  export type BookingOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<"id", ExtArgs["result"]["booking"]>;

  export type $BookingPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Booking";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
      },
      ExtArgs["result"]["booking"]
    >;
    composites: {};
  };

  type BookingGetPayload<
    S extends boolean | null | undefined | BookingDefaultArgs,
  > = $Result.GetResult<Prisma.$BookingPayload, S>;

  type BookingCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<BookingFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: BookingCountAggregateInputType | true;
  };

  export interface BookingDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Booking"];
      meta: { name: "Booking" };
    };
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(
      args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>,
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(
      args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>,
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     *
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BookingFindManyArgs>(
      args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     *
     */
    create<T extends BookingCreateArgs>(
      args: SelectSubset<T, BookingCreateArgs<ExtArgs>>,
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BookingCreateManyArgs>(
      args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     *
     */
    delete<T extends BookingDeleteArgs>(
      args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>,
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BookingUpdateArgs>(
      args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>,
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BookingDeleteManyArgs>(
      args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BookingUpdateManyArgs>(
      args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(
      args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>,
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
     **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], BookingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BookingAggregateArgs>(
      args: Subset<T, BookingAggregateArgs>,
    ): Prisma.PrismaPromise<GetBookingAggregateType<T>>;

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs["orderBy"] }
        : { orderBy?: BookingGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetBookingGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Booking model
     */
    readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", "String">;
  }

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput;
  };

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput;
  };

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bookings to fetch.
     */
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bookings to fetch.
     */
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bookings to fetch.
     */
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bookings.
     */
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * Booking create
   */
  export type BookingCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * The data needed to create a Booking.
     */
    data?: XOR<BookingCreateInput, BookingUncheckedCreateInput>;
  };

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Booking update
   */
  export type BookingUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>;
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput;
  };

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>;
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput;
    /**
     * Limit how many Bookings to update.
     */
    limit?: number;
  };

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>;
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput;
    /**
     * Limit how many Bookings to update.
     */
    limit?: number;
  };

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput;
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>;
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>;
  };

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput;
  };

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput;
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number;
  };

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
  };

  /**
   * Model BookingItem
   */

  export type AggregateBookingItem = {
    _count: BookingItemCountAggregateOutputType | null;
    _min: BookingItemMinAggregateOutputType | null;
    _max: BookingItemMaxAggregateOutputType | null;
  };

  export type BookingItemMinAggregateOutputType = {
    id: string | null;
  };

  export type BookingItemMaxAggregateOutputType = {
    id: string | null;
  };

  export type BookingItemCountAggregateOutputType = {
    id: number;
    _all: number;
  };

  export type BookingItemMinAggregateInputType = {
    id?: true;
  };

  export type BookingItemMaxAggregateInputType = {
    id?: true;
  };

  export type BookingItemCountAggregateInputType = {
    id?: true;
    _all?: true;
  };

  export type BookingItemAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which BookingItem to aggregate.
     */
    where?: BookingItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookingItems to fetch.
     */
    orderBy?:
      | BookingItemOrderByWithRelationInput
      | BookingItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BookingItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookingItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookingItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BookingItems
     **/
    _count?: true | BookingItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookingItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookingItemMaxAggregateInputType;
  };

  export type GetBookingItemAggregateType<T extends BookingItemAggregateArgs> =
    {
      [P in keyof T & keyof AggregateBookingItem]: P extends "_count" | "count"
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateBookingItem[P]>
        : GetScalarType<T[P], AggregateBookingItem[P]>;
    };

  export type BookingItemGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BookingItemWhereInput;
    orderBy?:
      | BookingItemOrderByWithAggregationInput
      | BookingItemOrderByWithAggregationInput[];
    by: BookingItemScalarFieldEnum[] | BookingItemScalarFieldEnum;
    having?: BookingItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookingItemCountAggregateInputType | true;
    _min?: BookingItemMinAggregateInputType;
    _max?: BookingItemMaxAggregateInputType;
  };

  export type BookingItemGroupByOutputType = {
    id: string;
    _count: BookingItemCountAggregateOutputType | null;
    _min: BookingItemMinAggregateOutputType | null;
    _max: BookingItemMaxAggregateOutputType | null;
  };

  type GetBookingItemGroupByPayload<T extends BookingItemGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BookingItemGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof BookingItemGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingItemGroupByOutputType[P]>
            : GetScalarType<T[P], BookingItemGroupByOutputType[P]>;
        }
      >
    >;

  export type BookingItemSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["bookingItem"]
  >;

  export type BookingItemSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["bookingItem"]
  >;

  export type BookingItemSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["bookingItem"]
  >;

  export type BookingItemSelectScalar = {
    id?: boolean;
  };

  export type BookingItemOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<"id", ExtArgs["result"]["bookingItem"]>;

  export type $BookingItemPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "BookingItem";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
      },
      ExtArgs["result"]["bookingItem"]
    >;
    composites: {};
  };

  type BookingItemGetPayload<
    S extends boolean | null | undefined | BookingItemDefaultArgs,
  > = $Result.GetResult<Prisma.$BookingItemPayload, S>;

  type BookingItemCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    BookingItemFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: BookingItemCountAggregateInputType | true;
  };

  export interface BookingItemDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["BookingItem"];
      meta: { name: "BookingItem" };
    };
    /**
     * Find zero or one BookingItem that matches the filter.
     * @param {BookingItemFindUniqueArgs} args - Arguments to find a BookingItem
     * @example
     * // Get one BookingItem
     * const bookingItem = await prisma.bookingItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingItemFindUniqueArgs>(
      args: SelectSubset<T, BookingItemFindUniqueArgs<ExtArgs>>,
    ): Prisma__BookingItemClient<
      $Result.GetResult<
        Prisma.$BookingItemPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one BookingItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingItemFindUniqueOrThrowArgs} args - Arguments to find a BookingItem
     * @example
     * // Get one BookingItem
     * const bookingItem = await prisma.bookingItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingItemFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BookingItemFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__BookingItemClient<
      $Result.GetResult<
        Prisma.$BookingItemPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first BookingItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemFindFirstArgs} args - Arguments to find a BookingItem
     * @example
     * // Get one BookingItem
     * const bookingItem = await prisma.bookingItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingItemFindFirstArgs>(
      args?: SelectSubset<T, BookingItemFindFirstArgs<ExtArgs>>,
    ): Prisma__BookingItemClient<
      $Result.GetResult<
        Prisma.$BookingItemPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first BookingItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemFindFirstOrThrowArgs} args - Arguments to find a BookingItem
     * @example
     * // Get one BookingItem
     * const bookingItem = await prisma.bookingItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookingItemFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__BookingItemClient<
      $Result.GetResult<
        Prisma.$BookingItemPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more BookingItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingItems
     * const bookingItems = await prisma.bookingItem.findMany()
     *
     * // Get first 10 BookingItems
     * const bookingItems = await prisma.bookingItem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bookingItemWithIdOnly = await prisma.bookingItem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BookingItemFindManyArgs>(
      args?: SelectSubset<T, BookingItemFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookingItemPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a BookingItem.
     * @param {BookingItemCreateArgs} args - Arguments to create a BookingItem.
     * @example
     * // Create one BookingItem
     * const BookingItem = await prisma.bookingItem.create({
     *   data: {
     *     // ... data to create a BookingItem
     *   }
     * })
     *
     */
    create<T extends BookingItemCreateArgs>(
      args: SelectSubset<T, BookingItemCreateArgs<ExtArgs>>,
    ): Prisma__BookingItemClient<
      $Result.GetResult<
        Prisma.$BookingItemPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many BookingItems.
     * @param {BookingItemCreateManyArgs} args - Arguments to create many BookingItems.
     * @example
     * // Create many BookingItems
     * const bookingItem = await prisma.bookingItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BookingItemCreateManyArgs>(
      args?: SelectSubset<T, BookingItemCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many BookingItems and returns the data saved in the database.
     * @param {BookingItemCreateManyAndReturnArgs} args - Arguments to create many BookingItems.
     * @example
     * // Create many BookingItems
     * const bookingItem = await prisma.bookingItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BookingItems and only return the `id`
     * const bookingItemWithIdOnly = await prisma.bookingItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BookingItemCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BookingItemCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookingItemPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a BookingItem.
     * @param {BookingItemDeleteArgs} args - Arguments to delete one BookingItem.
     * @example
     * // Delete one BookingItem
     * const BookingItem = await prisma.bookingItem.delete({
     *   where: {
     *     // ... filter to delete one BookingItem
     *   }
     * })
     *
     */
    delete<T extends BookingItemDeleteArgs>(
      args: SelectSubset<T, BookingItemDeleteArgs<ExtArgs>>,
    ): Prisma__BookingItemClient<
      $Result.GetResult<
        Prisma.$BookingItemPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one BookingItem.
     * @param {BookingItemUpdateArgs} args - Arguments to update one BookingItem.
     * @example
     * // Update one BookingItem
     * const bookingItem = await prisma.bookingItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BookingItemUpdateArgs>(
      args: SelectSubset<T, BookingItemUpdateArgs<ExtArgs>>,
    ): Prisma__BookingItemClient<
      $Result.GetResult<
        Prisma.$BookingItemPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more BookingItems.
     * @param {BookingItemDeleteManyArgs} args - Arguments to filter BookingItems to delete.
     * @example
     * // Delete a few BookingItems
     * const { count } = await prisma.bookingItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BookingItemDeleteManyArgs>(
      args?: SelectSubset<T, BookingItemDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more BookingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingItems
     * const bookingItem = await prisma.bookingItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BookingItemUpdateManyArgs>(
      args: SelectSubset<T, BookingItemUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more BookingItems and returns the data updated in the database.
     * @param {BookingItemUpdateManyAndReturnArgs} args - Arguments to update many BookingItems.
     * @example
     * // Update many BookingItems
     * const bookingItem = await prisma.bookingItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BookingItems and only return the `id`
     * const bookingItemWithIdOnly = await prisma.bookingItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BookingItemUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BookingItemUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookingItemPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one BookingItem.
     * @param {BookingItemUpsertArgs} args - Arguments to update or create a BookingItem.
     * @example
     * // Update or create a BookingItem
     * const bookingItem = await prisma.bookingItem.upsert({
     *   create: {
     *     // ... data to create a BookingItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingItem we want to update
     *   }
     * })
     */
    upsert<T extends BookingItemUpsertArgs>(
      args: SelectSubset<T, BookingItemUpsertArgs<ExtArgs>>,
    ): Prisma__BookingItemClient<
      $Result.GetResult<
        Prisma.$BookingItemPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of BookingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemCountArgs} args - Arguments to filter BookingItems to count.
     * @example
     * // Count the number of BookingItems
     * const count = await prisma.bookingItem.count({
     *   where: {
     *     // ... the filter for the BookingItems we want to count
     *   }
     * })
     **/
    count<T extends BookingItemCountArgs>(
      args?: Subset<T, BookingItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], BookingItemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a BookingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BookingItemAggregateArgs>(
      args: Subset<T, BookingItemAggregateArgs>,
    ): Prisma.PrismaPromise<GetBookingItemAggregateType<T>>;

    /**
     * Group by BookingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends BookingItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingItemGroupByArgs["orderBy"] }
        : { orderBy?: BookingItemGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, BookingItemGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetBookingItemGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BookingItem model
     */
    readonly fields: BookingItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingItemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the BookingItem model
   */
  interface BookingItemFieldRefs {
    readonly id: FieldRef<"BookingItem", "String">;
  }

  // Custom InputTypes
  /**
   * BookingItem findUnique
   */
  export type BookingItemFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null;
    /**
     * Filter, which BookingItem to fetch.
     */
    where: BookingItemWhereUniqueInput;
  };

  /**
   * BookingItem findUniqueOrThrow
   */
  export type BookingItemFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null;
    /**
     * Filter, which BookingItem to fetch.
     */
    where: BookingItemWhereUniqueInput;
  };

  /**
   * BookingItem findFirst
   */
  export type BookingItemFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null;
    /**
     * Filter, which BookingItem to fetch.
     */
    where?: BookingItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookingItems to fetch.
     */
    orderBy?:
      | BookingItemOrderByWithRelationInput
      | BookingItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BookingItems.
     */
    cursor?: BookingItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookingItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookingItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BookingItems.
     */
    distinct?: BookingItemScalarFieldEnum | BookingItemScalarFieldEnum[];
  };

  /**
   * BookingItem findFirstOrThrow
   */
  export type BookingItemFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null;
    /**
     * Filter, which BookingItem to fetch.
     */
    where?: BookingItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookingItems to fetch.
     */
    orderBy?:
      | BookingItemOrderByWithRelationInput
      | BookingItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BookingItems.
     */
    cursor?: BookingItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookingItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookingItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BookingItems.
     */
    distinct?: BookingItemScalarFieldEnum | BookingItemScalarFieldEnum[];
  };

  /**
   * BookingItem findMany
   */
  export type BookingItemFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null;
    /**
     * Filter, which BookingItems to fetch.
     */
    where?: BookingItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookingItems to fetch.
     */
    orderBy?:
      | BookingItemOrderByWithRelationInput
      | BookingItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BookingItems.
     */
    cursor?: BookingItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookingItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookingItems.
     */
    skip?: number;
    distinct?: BookingItemScalarFieldEnum | BookingItemScalarFieldEnum[];
  };

  /**
   * BookingItem create
   */
  export type BookingItemCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null;
    /**
     * The data needed to create a BookingItem.
     */
    data?: XOR<BookingItemCreateInput, BookingItemUncheckedCreateInput>;
  };

  /**
   * BookingItem createMany
   */
  export type BookingItemCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many BookingItems.
     */
    data: BookingItemCreateManyInput | BookingItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * BookingItem createManyAndReturn
   */
  export type BookingItemCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null;
    /**
     * The data used to create many BookingItems.
     */
    data: BookingItemCreateManyInput | BookingItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * BookingItem update
   */
  export type BookingItemUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null;
    /**
     * The data needed to update a BookingItem.
     */
    data: XOR<BookingItemUpdateInput, BookingItemUncheckedUpdateInput>;
    /**
     * Choose, which BookingItem to update.
     */
    where: BookingItemWhereUniqueInput;
  };

  /**
   * BookingItem updateMany
   */
  export type BookingItemUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update BookingItems.
     */
    data: XOR<
      BookingItemUpdateManyMutationInput,
      BookingItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which BookingItems to update
     */
    where?: BookingItemWhereInput;
    /**
     * Limit how many BookingItems to update.
     */
    limit?: number;
  };

  /**
   * BookingItem updateManyAndReturn
   */
  export type BookingItemUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null;
    /**
     * The data used to update BookingItems.
     */
    data: XOR<
      BookingItemUpdateManyMutationInput,
      BookingItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which BookingItems to update
     */
    where?: BookingItemWhereInput;
    /**
     * Limit how many BookingItems to update.
     */
    limit?: number;
  };

  /**
   * BookingItem upsert
   */
  export type BookingItemUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null;
    /**
     * The filter to search for the BookingItem to update in case it exists.
     */
    where: BookingItemWhereUniqueInput;
    /**
     * In case the BookingItem found by the `where` argument doesn't exist, create a new BookingItem with this data.
     */
    create: XOR<BookingItemCreateInput, BookingItemUncheckedCreateInput>;
    /**
     * In case the BookingItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingItemUpdateInput, BookingItemUncheckedUpdateInput>;
  };

  /**
   * BookingItem delete
   */
  export type BookingItemDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null;
    /**
     * Filter which BookingItem to delete.
     */
    where: BookingItemWhereUniqueInput;
  };

  /**
   * BookingItem deleteMany
   */
  export type BookingItemDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which BookingItems to delete
     */
    where?: BookingItemWhereInput;
    /**
     * Limit how many BookingItems to delete.
     */
    limit?: number;
  };

  /**
   * BookingItem without action
   */
  export type BookingItemDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null;
  };

  /**
   * Model LockedTicket
   */

  export type AggregateLockedTicket = {
    _count: LockedTicketCountAggregateOutputType | null;
    _min: LockedTicketMinAggregateOutputType | null;
    _max: LockedTicketMaxAggregateOutputType | null;
  };

  export type LockedTicketMinAggregateOutputType = {
    id: string | null;
  };

  export type LockedTicketMaxAggregateOutputType = {
    id: string | null;
  };

  export type LockedTicketCountAggregateOutputType = {
    id: number;
    _all: number;
  };

  export type LockedTicketMinAggregateInputType = {
    id?: true;
  };

  export type LockedTicketMaxAggregateInputType = {
    id?: true;
  };

  export type LockedTicketCountAggregateInputType = {
    id?: true;
    _all?: true;
  };

  export type LockedTicketAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which LockedTicket to aggregate.
     */
    where?: LockedTicketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockedTickets to fetch.
     */
    orderBy?:
      | LockedTicketOrderByWithRelationInput
      | LockedTicketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LockedTicketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockedTickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockedTickets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LockedTickets
     **/
    _count?: true | LockedTicketCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LockedTicketMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LockedTicketMaxAggregateInputType;
  };

  export type GetLockedTicketAggregateType<
    T extends LockedTicketAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateLockedTicket]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLockedTicket[P]>
      : GetScalarType<T[P], AggregateLockedTicket[P]>;
  };

  export type LockedTicketGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LockedTicketWhereInput;
    orderBy?:
      | LockedTicketOrderByWithAggregationInput
      | LockedTicketOrderByWithAggregationInput[];
    by: LockedTicketScalarFieldEnum[] | LockedTicketScalarFieldEnum;
    having?: LockedTicketScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LockedTicketCountAggregateInputType | true;
    _min?: LockedTicketMinAggregateInputType;
    _max?: LockedTicketMaxAggregateInputType;
  };

  export type LockedTicketGroupByOutputType = {
    id: string;
    _count: LockedTicketCountAggregateOutputType | null;
    _min: LockedTicketMinAggregateOutputType | null;
    _max: LockedTicketMaxAggregateOutputType | null;
  };

  type GetLockedTicketGroupByPayload<T extends LockedTicketGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<LockedTicketGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof LockedTicketGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LockedTicketGroupByOutputType[P]>
            : GetScalarType<T[P], LockedTicketGroupByOutputType[P]>;
        }
      >
    >;

  export type LockedTicketSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["lockedTicket"]
  >;

  export type LockedTicketSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["lockedTicket"]
  >;

  export type LockedTicketSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["lockedTicket"]
  >;

  export type LockedTicketSelectScalar = {
    id?: boolean;
  };

  export type LockedTicketOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<"id", ExtArgs["result"]["lockedTicket"]>;

  export type $LockedTicketPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "LockedTicket";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
      },
      ExtArgs["result"]["lockedTicket"]
    >;
    composites: {};
  };

  type LockedTicketGetPayload<
    S extends boolean | null | undefined | LockedTicketDefaultArgs,
  > = $Result.GetResult<Prisma.$LockedTicketPayload, S>;

  type LockedTicketCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    LockedTicketFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: LockedTicketCountAggregateInputType | true;
  };

  export interface LockedTicketDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["LockedTicket"];
      meta: { name: "LockedTicket" };
    };
    /**
     * Find zero or one LockedTicket that matches the filter.
     * @param {LockedTicketFindUniqueArgs} args - Arguments to find a LockedTicket
     * @example
     * // Get one LockedTicket
     * const lockedTicket = await prisma.lockedTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LockedTicketFindUniqueArgs>(
      args: SelectSubset<T, LockedTicketFindUniqueArgs<ExtArgs>>,
    ): Prisma__LockedTicketClient<
      $Result.GetResult<
        Prisma.$LockedTicketPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one LockedTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LockedTicketFindUniqueOrThrowArgs} args - Arguments to find a LockedTicket
     * @example
     * // Get one LockedTicket
     * const lockedTicket = await prisma.lockedTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LockedTicketFindUniqueOrThrowArgs>(
      args: SelectSubset<T, LockedTicketFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__LockedTicketClient<
      $Result.GetResult<
        Prisma.$LockedTicketPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first LockedTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockedTicketFindFirstArgs} args - Arguments to find a LockedTicket
     * @example
     * // Get one LockedTicket
     * const lockedTicket = await prisma.lockedTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LockedTicketFindFirstArgs>(
      args?: SelectSubset<T, LockedTicketFindFirstArgs<ExtArgs>>,
    ): Prisma__LockedTicketClient<
      $Result.GetResult<
        Prisma.$LockedTicketPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first LockedTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockedTicketFindFirstOrThrowArgs} args - Arguments to find a LockedTicket
     * @example
     * // Get one LockedTicket
     * const lockedTicket = await prisma.lockedTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LockedTicketFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LockedTicketFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__LockedTicketClient<
      $Result.GetResult<
        Prisma.$LockedTicketPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more LockedTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockedTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LockedTickets
     * const lockedTickets = await prisma.lockedTicket.findMany()
     *
     * // Get first 10 LockedTickets
     * const lockedTickets = await prisma.lockedTicket.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lockedTicketWithIdOnly = await prisma.lockedTicket.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LockedTicketFindManyArgs>(
      args?: SelectSubset<T, LockedTicketFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LockedTicketPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a LockedTicket.
     * @param {LockedTicketCreateArgs} args - Arguments to create a LockedTicket.
     * @example
     * // Create one LockedTicket
     * const LockedTicket = await prisma.lockedTicket.create({
     *   data: {
     *     // ... data to create a LockedTicket
     *   }
     * })
     *
     */
    create<T extends LockedTicketCreateArgs>(
      args: SelectSubset<T, LockedTicketCreateArgs<ExtArgs>>,
    ): Prisma__LockedTicketClient<
      $Result.GetResult<
        Prisma.$LockedTicketPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many LockedTickets.
     * @param {LockedTicketCreateManyArgs} args - Arguments to create many LockedTickets.
     * @example
     * // Create many LockedTickets
     * const lockedTicket = await prisma.lockedTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LockedTicketCreateManyArgs>(
      args?: SelectSubset<T, LockedTicketCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many LockedTickets and returns the data saved in the database.
     * @param {LockedTicketCreateManyAndReturnArgs} args - Arguments to create many LockedTickets.
     * @example
     * // Create many LockedTickets
     * const lockedTicket = await prisma.lockedTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LockedTickets and only return the `id`
     * const lockedTicketWithIdOnly = await prisma.lockedTicket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LockedTicketCreateManyAndReturnArgs>(
      args?: SelectSubset<T, LockedTicketCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LockedTicketPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a LockedTicket.
     * @param {LockedTicketDeleteArgs} args - Arguments to delete one LockedTicket.
     * @example
     * // Delete one LockedTicket
     * const LockedTicket = await prisma.lockedTicket.delete({
     *   where: {
     *     // ... filter to delete one LockedTicket
     *   }
     * })
     *
     */
    delete<T extends LockedTicketDeleteArgs>(
      args: SelectSubset<T, LockedTicketDeleteArgs<ExtArgs>>,
    ): Prisma__LockedTicketClient<
      $Result.GetResult<
        Prisma.$LockedTicketPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one LockedTicket.
     * @param {LockedTicketUpdateArgs} args - Arguments to update one LockedTicket.
     * @example
     * // Update one LockedTicket
     * const lockedTicket = await prisma.lockedTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LockedTicketUpdateArgs>(
      args: SelectSubset<T, LockedTicketUpdateArgs<ExtArgs>>,
    ): Prisma__LockedTicketClient<
      $Result.GetResult<
        Prisma.$LockedTicketPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more LockedTickets.
     * @param {LockedTicketDeleteManyArgs} args - Arguments to filter LockedTickets to delete.
     * @example
     * // Delete a few LockedTickets
     * const { count } = await prisma.lockedTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LockedTicketDeleteManyArgs>(
      args?: SelectSubset<T, LockedTicketDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more LockedTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockedTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LockedTickets
     * const lockedTicket = await prisma.lockedTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LockedTicketUpdateManyArgs>(
      args: SelectSubset<T, LockedTicketUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more LockedTickets and returns the data updated in the database.
     * @param {LockedTicketUpdateManyAndReturnArgs} args - Arguments to update many LockedTickets.
     * @example
     * // Update many LockedTickets
     * const lockedTicket = await prisma.lockedTicket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LockedTickets and only return the `id`
     * const lockedTicketWithIdOnly = await prisma.lockedTicket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends LockedTicketUpdateManyAndReturnArgs>(
      args: SelectSubset<T, LockedTicketUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LockedTicketPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one LockedTicket.
     * @param {LockedTicketUpsertArgs} args - Arguments to update or create a LockedTicket.
     * @example
     * // Update or create a LockedTicket
     * const lockedTicket = await prisma.lockedTicket.upsert({
     *   create: {
     *     // ... data to create a LockedTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LockedTicket we want to update
     *   }
     * })
     */
    upsert<T extends LockedTicketUpsertArgs>(
      args: SelectSubset<T, LockedTicketUpsertArgs<ExtArgs>>,
    ): Prisma__LockedTicketClient<
      $Result.GetResult<
        Prisma.$LockedTicketPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of LockedTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockedTicketCountArgs} args - Arguments to filter LockedTickets to count.
     * @example
     * // Count the number of LockedTickets
     * const count = await prisma.lockedTicket.count({
     *   where: {
     *     // ... the filter for the LockedTickets we want to count
     *   }
     * })
     **/
    count<T extends LockedTicketCountArgs>(
      args?: Subset<T, LockedTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], LockedTicketCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a LockedTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockedTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends LockedTicketAggregateArgs>(
      args: Subset<T, LockedTicketAggregateArgs>,
    ): Prisma.PrismaPromise<GetLockedTicketAggregateType<T>>;

    /**
     * Group by LockedTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockedTicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends LockedTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LockedTicketGroupByArgs["orderBy"] }
        : { orderBy?: LockedTicketGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, LockedTicketGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetLockedTicketGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LockedTicket model
     */
    readonly fields: LockedTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LockedTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LockedTicketClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the LockedTicket model
   */
  interface LockedTicketFieldRefs {
    readonly id: FieldRef<"LockedTicket", "String">;
  }

  // Custom InputTypes
  /**
   * LockedTicket findUnique
   */
  export type LockedTicketFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedTicket
     */
    select?: LockedTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedTicket
     */
    omit?: LockedTicketOmit<ExtArgs> | null;
    /**
     * Filter, which LockedTicket to fetch.
     */
    where: LockedTicketWhereUniqueInput;
  };

  /**
   * LockedTicket findUniqueOrThrow
   */
  export type LockedTicketFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedTicket
     */
    select?: LockedTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedTicket
     */
    omit?: LockedTicketOmit<ExtArgs> | null;
    /**
     * Filter, which LockedTicket to fetch.
     */
    where: LockedTicketWhereUniqueInput;
  };

  /**
   * LockedTicket findFirst
   */
  export type LockedTicketFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedTicket
     */
    select?: LockedTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedTicket
     */
    omit?: LockedTicketOmit<ExtArgs> | null;
    /**
     * Filter, which LockedTicket to fetch.
     */
    where?: LockedTicketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockedTickets to fetch.
     */
    orderBy?:
      | LockedTicketOrderByWithRelationInput
      | LockedTicketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LockedTickets.
     */
    cursor?: LockedTicketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockedTickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockedTickets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LockedTickets.
     */
    distinct?: LockedTicketScalarFieldEnum | LockedTicketScalarFieldEnum[];
  };

  /**
   * LockedTicket findFirstOrThrow
   */
  export type LockedTicketFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedTicket
     */
    select?: LockedTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedTicket
     */
    omit?: LockedTicketOmit<ExtArgs> | null;
    /**
     * Filter, which LockedTicket to fetch.
     */
    where?: LockedTicketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockedTickets to fetch.
     */
    orderBy?:
      | LockedTicketOrderByWithRelationInput
      | LockedTicketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LockedTickets.
     */
    cursor?: LockedTicketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockedTickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockedTickets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LockedTickets.
     */
    distinct?: LockedTicketScalarFieldEnum | LockedTicketScalarFieldEnum[];
  };

  /**
   * LockedTicket findMany
   */
  export type LockedTicketFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedTicket
     */
    select?: LockedTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedTicket
     */
    omit?: LockedTicketOmit<ExtArgs> | null;
    /**
     * Filter, which LockedTickets to fetch.
     */
    where?: LockedTicketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockedTickets to fetch.
     */
    orderBy?:
      | LockedTicketOrderByWithRelationInput
      | LockedTicketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LockedTickets.
     */
    cursor?: LockedTicketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockedTickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockedTickets.
     */
    skip?: number;
    distinct?: LockedTicketScalarFieldEnum | LockedTicketScalarFieldEnum[];
  };

  /**
   * LockedTicket create
   */
  export type LockedTicketCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedTicket
     */
    select?: LockedTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedTicket
     */
    omit?: LockedTicketOmit<ExtArgs> | null;
    /**
     * The data needed to create a LockedTicket.
     */
    data?: XOR<LockedTicketCreateInput, LockedTicketUncheckedCreateInput>;
  };

  /**
   * LockedTicket createMany
   */
  export type LockedTicketCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many LockedTickets.
     */
    data: LockedTicketCreateManyInput | LockedTicketCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * LockedTicket createManyAndReturn
   */
  export type LockedTicketCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedTicket
     */
    select?: LockedTicketSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedTicket
     */
    omit?: LockedTicketOmit<ExtArgs> | null;
    /**
     * The data used to create many LockedTickets.
     */
    data: LockedTicketCreateManyInput | LockedTicketCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * LockedTicket update
   */
  export type LockedTicketUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedTicket
     */
    select?: LockedTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedTicket
     */
    omit?: LockedTicketOmit<ExtArgs> | null;
    /**
     * The data needed to update a LockedTicket.
     */
    data: XOR<LockedTicketUpdateInput, LockedTicketUncheckedUpdateInput>;
    /**
     * Choose, which LockedTicket to update.
     */
    where: LockedTicketWhereUniqueInput;
  };

  /**
   * LockedTicket updateMany
   */
  export type LockedTicketUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update LockedTickets.
     */
    data: XOR<
      LockedTicketUpdateManyMutationInput,
      LockedTicketUncheckedUpdateManyInput
    >;
    /**
     * Filter which LockedTickets to update
     */
    where?: LockedTicketWhereInput;
    /**
     * Limit how many LockedTickets to update.
     */
    limit?: number;
  };

  /**
   * LockedTicket updateManyAndReturn
   */
  export type LockedTicketUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedTicket
     */
    select?: LockedTicketSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedTicket
     */
    omit?: LockedTicketOmit<ExtArgs> | null;
    /**
     * The data used to update LockedTickets.
     */
    data: XOR<
      LockedTicketUpdateManyMutationInput,
      LockedTicketUncheckedUpdateManyInput
    >;
    /**
     * Filter which LockedTickets to update
     */
    where?: LockedTicketWhereInput;
    /**
     * Limit how many LockedTickets to update.
     */
    limit?: number;
  };

  /**
   * LockedTicket upsert
   */
  export type LockedTicketUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedTicket
     */
    select?: LockedTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedTicket
     */
    omit?: LockedTicketOmit<ExtArgs> | null;
    /**
     * The filter to search for the LockedTicket to update in case it exists.
     */
    where: LockedTicketWhereUniqueInput;
    /**
     * In case the LockedTicket found by the `where` argument doesn't exist, create a new LockedTicket with this data.
     */
    create: XOR<LockedTicketCreateInput, LockedTicketUncheckedCreateInput>;
    /**
     * In case the LockedTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LockedTicketUpdateInput, LockedTicketUncheckedUpdateInput>;
  };

  /**
   * LockedTicket delete
   */
  export type LockedTicketDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedTicket
     */
    select?: LockedTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedTicket
     */
    omit?: LockedTicketOmit<ExtArgs> | null;
    /**
     * Filter which LockedTicket to delete.
     */
    where: LockedTicketWhereUniqueInput;
  };

  /**
   * LockedTicket deleteMany
   */
  export type LockedTicketDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which LockedTickets to delete
     */
    where?: LockedTicketWhereInput;
    /**
     * Limit how many LockedTickets to delete.
     */
    limit?: number;
  };

  /**
   * LockedTicket without action
   */
  export type LockedTicketDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedTicket
     */
    select?: LockedTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedTicket
     */
    omit?: LockedTicketOmit<ExtArgs> | null;
  };

  /**
   * Model LockedItem
   */

  export type AggregateLockedItem = {
    _count: LockedItemCountAggregateOutputType | null;
    _min: LockedItemMinAggregateOutputType | null;
    _max: LockedItemMaxAggregateOutputType | null;
  };

  export type LockedItemMinAggregateOutputType = {
    id: string | null;
  };

  export type LockedItemMaxAggregateOutputType = {
    id: string | null;
  };

  export type LockedItemCountAggregateOutputType = {
    id: number;
    _all: number;
  };

  export type LockedItemMinAggregateInputType = {
    id?: true;
  };

  export type LockedItemMaxAggregateInputType = {
    id?: true;
  };

  export type LockedItemCountAggregateInputType = {
    id?: true;
    _all?: true;
  };

  export type LockedItemAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which LockedItem to aggregate.
     */
    where?: LockedItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockedItems to fetch.
     */
    orderBy?:
      | LockedItemOrderByWithRelationInput
      | LockedItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LockedItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockedItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockedItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LockedItems
     **/
    _count?: true | LockedItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LockedItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LockedItemMaxAggregateInputType;
  };

  export type GetLockedItemAggregateType<T extends LockedItemAggregateArgs> = {
    [P in keyof T & keyof AggregateLockedItem]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLockedItem[P]>
      : GetScalarType<T[P], AggregateLockedItem[P]>;
  };

  export type LockedItemGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LockedItemWhereInput;
    orderBy?:
      | LockedItemOrderByWithAggregationInput
      | LockedItemOrderByWithAggregationInput[];
    by: LockedItemScalarFieldEnum[] | LockedItemScalarFieldEnum;
    having?: LockedItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LockedItemCountAggregateInputType | true;
    _min?: LockedItemMinAggregateInputType;
    _max?: LockedItemMaxAggregateInputType;
  };

  export type LockedItemGroupByOutputType = {
    id: string;
    _count: LockedItemCountAggregateOutputType | null;
    _min: LockedItemMinAggregateOutputType | null;
    _max: LockedItemMaxAggregateOutputType | null;
  };

  type GetLockedItemGroupByPayload<T extends LockedItemGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<LockedItemGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof LockedItemGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LockedItemGroupByOutputType[P]>
            : GetScalarType<T[P], LockedItemGroupByOutputType[P]>;
        }
      >
    >;

  export type LockedItemSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["lockedItem"]
  >;

  export type LockedItemSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["lockedItem"]
  >;

  export type LockedItemSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["lockedItem"]
  >;

  export type LockedItemSelectScalar = {
    id?: boolean;
  };

  export type LockedItemOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<"id", ExtArgs["result"]["lockedItem"]>;

  export type $LockedItemPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "LockedItem";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
      },
      ExtArgs["result"]["lockedItem"]
    >;
    composites: {};
  };

  type LockedItemGetPayload<
    S extends boolean | null | undefined | LockedItemDefaultArgs,
  > = $Result.GetResult<Prisma.$LockedItemPayload, S>;

  type LockedItemCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    LockedItemFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: LockedItemCountAggregateInputType | true;
  };

  export interface LockedItemDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["LockedItem"];
      meta: { name: "LockedItem" };
    };
    /**
     * Find zero or one LockedItem that matches the filter.
     * @param {LockedItemFindUniqueArgs} args - Arguments to find a LockedItem
     * @example
     * // Get one LockedItem
     * const lockedItem = await prisma.lockedItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LockedItemFindUniqueArgs>(
      args: SelectSubset<T, LockedItemFindUniqueArgs<ExtArgs>>,
    ): Prisma__LockedItemClient<
      $Result.GetResult<
        Prisma.$LockedItemPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one LockedItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LockedItemFindUniqueOrThrowArgs} args - Arguments to find a LockedItem
     * @example
     * // Get one LockedItem
     * const lockedItem = await prisma.lockedItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LockedItemFindUniqueOrThrowArgs>(
      args: SelectSubset<T, LockedItemFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__LockedItemClient<
      $Result.GetResult<
        Prisma.$LockedItemPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first LockedItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockedItemFindFirstArgs} args - Arguments to find a LockedItem
     * @example
     * // Get one LockedItem
     * const lockedItem = await prisma.lockedItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LockedItemFindFirstArgs>(
      args?: SelectSubset<T, LockedItemFindFirstArgs<ExtArgs>>,
    ): Prisma__LockedItemClient<
      $Result.GetResult<
        Prisma.$LockedItemPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first LockedItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockedItemFindFirstOrThrowArgs} args - Arguments to find a LockedItem
     * @example
     * // Get one LockedItem
     * const lockedItem = await prisma.lockedItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LockedItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LockedItemFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__LockedItemClient<
      $Result.GetResult<
        Prisma.$LockedItemPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more LockedItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockedItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LockedItems
     * const lockedItems = await prisma.lockedItem.findMany()
     *
     * // Get first 10 LockedItems
     * const lockedItems = await prisma.lockedItem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lockedItemWithIdOnly = await prisma.lockedItem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LockedItemFindManyArgs>(
      args?: SelectSubset<T, LockedItemFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LockedItemPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a LockedItem.
     * @param {LockedItemCreateArgs} args - Arguments to create a LockedItem.
     * @example
     * // Create one LockedItem
     * const LockedItem = await prisma.lockedItem.create({
     *   data: {
     *     // ... data to create a LockedItem
     *   }
     * })
     *
     */
    create<T extends LockedItemCreateArgs>(
      args: SelectSubset<T, LockedItemCreateArgs<ExtArgs>>,
    ): Prisma__LockedItemClient<
      $Result.GetResult<
        Prisma.$LockedItemPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many LockedItems.
     * @param {LockedItemCreateManyArgs} args - Arguments to create many LockedItems.
     * @example
     * // Create many LockedItems
     * const lockedItem = await prisma.lockedItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LockedItemCreateManyArgs>(
      args?: SelectSubset<T, LockedItemCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many LockedItems and returns the data saved in the database.
     * @param {LockedItemCreateManyAndReturnArgs} args - Arguments to create many LockedItems.
     * @example
     * // Create many LockedItems
     * const lockedItem = await prisma.lockedItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LockedItems and only return the `id`
     * const lockedItemWithIdOnly = await prisma.lockedItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LockedItemCreateManyAndReturnArgs>(
      args?: SelectSubset<T, LockedItemCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LockedItemPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a LockedItem.
     * @param {LockedItemDeleteArgs} args - Arguments to delete one LockedItem.
     * @example
     * // Delete one LockedItem
     * const LockedItem = await prisma.lockedItem.delete({
     *   where: {
     *     // ... filter to delete one LockedItem
     *   }
     * })
     *
     */
    delete<T extends LockedItemDeleteArgs>(
      args: SelectSubset<T, LockedItemDeleteArgs<ExtArgs>>,
    ): Prisma__LockedItemClient<
      $Result.GetResult<
        Prisma.$LockedItemPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one LockedItem.
     * @param {LockedItemUpdateArgs} args - Arguments to update one LockedItem.
     * @example
     * // Update one LockedItem
     * const lockedItem = await prisma.lockedItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LockedItemUpdateArgs>(
      args: SelectSubset<T, LockedItemUpdateArgs<ExtArgs>>,
    ): Prisma__LockedItemClient<
      $Result.GetResult<
        Prisma.$LockedItemPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more LockedItems.
     * @param {LockedItemDeleteManyArgs} args - Arguments to filter LockedItems to delete.
     * @example
     * // Delete a few LockedItems
     * const { count } = await prisma.lockedItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LockedItemDeleteManyArgs>(
      args?: SelectSubset<T, LockedItemDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more LockedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockedItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LockedItems
     * const lockedItem = await prisma.lockedItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LockedItemUpdateManyArgs>(
      args: SelectSubset<T, LockedItemUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more LockedItems and returns the data updated in the database.
     * @param {LockedItemUpdateManyAndReturnArgs} args - Arguments to update many LockedItems.
     * @example
     * // Update many LockedItems
     * const lockedItem = await prisma.lockedItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LockedItems and only return the `id`
     * const lockedItemWithIdOnly = await prisma.lockedItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends LockedItemUpdateManyAndReturnArgs>(
      args: SelectSubset<T, LockedItemUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LockedItemPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one LockedItem.
     * @param {LockedItemUpsertArgs} args - Arguments to update or create a LockedItem.
     * @example
     * // Update or create a LockedItem
     * const lockedItem = await prisma.lockedItem.upsert({
     *   create: {
     *     // ... data to create a LockedItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LockedItem we want to update
     *   }
     * })
     */
    upsert<T extends LockedItemUpsertArgs>(
      args: SelectSubset<T, LockedItemUpsertArgs<ExtArgs>>,
    ): Prisma__LockedItemClient<
      $Result.GetResult<
        Prisma.$LockedItemPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of LockedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockedItemCountArgs} args - Arguments to filter LockedItems to count.
     * @example
     * // Count the number of LockedItems
     * const count = await prisma.lockedItem.count({
     *   where: {
     *     // ... the filter for the LockedItems we want to count
     *   }
     * })
     **/
    count<T extends LockedItemCountArgs>(
      args?: Subset<T, LockedItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], LockedItemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a LockedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockedItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends LockedItemAggregateArgs>(
      args: Subset<T, LockedItemAggregateArgs>,
    ): Prisma.PrismaPromise<GetLockedItemAggregateType<T>>;

    /**
     * Group by LockedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockedItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends LockedItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LockedItemGroupByArgs["orderBy"] }
        : { orderBy?: LockedItemGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, LockedItemGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetLockedItemGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LockedItem model
     */
    readonly fields: LockedItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LockedItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LockedItemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the LockedItem model
   */
  interface LockedItemFieldRefs {
    readonly id: FieldRef<"LockedItem", "String">;
  }

  // Custom InputTypes
  /**
   * LockedItem findUnique
   */
  export type LockedItemFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedItem
     */
    select?: LockedItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedItem
     */
    omit?: LockedItemOmit<ExtArgs> | null;
    /**
     * Filter, which LockedItem to fetch.
     */
    where: LockedItemWhereUniqueInput;
  };

  /**
   * LockedItem findUniqueOrThrow
   */
  export type LockedItemFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedItem
     */
    select?: LockedItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedItem
     */
    omit?: LockedItemOmit<ExtArgs> | null;
    /**
     * Filter, which LockedItem to fetch.
     */
    where: LockedItemWhereUniqueInput;
  };

  /**
   * LockedItem findFirst
   */
  export type LockedItemFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedItem
     */
    select?: LockedItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedItem
     */
    omit?: LockedItemOmit<ExtArgs> | null;
    /**
     * Filter, which LockedItem to fetch.
     */
    where?: LockedItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockedItems to fetch.
     */
    orderBy?:
      | LockedItemOrderByWithRelationInput
      | LockedItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LockedItems.
     */
    cursor?: LockedItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockedItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockedItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LockedItems.
     */
    distinct?: LockedItemScalarFieldEnum | LockedItemScalarFieldEnum[];
  };

  /**
   * LockedItem findFirstOrThrow
   */
  export type LockedItemFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedItem
     */
    select?: LockedItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedItem
     */
    omit?: LockedItemOmit<ExtArgs> | null;
    /**
     * Filter, which LockedItem to fetch.
     */
    where?: LockedItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockedItems to fetch.
     */
    orderBy?:
      | LockedItemOrderByWithRelationInput
      | LockedItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LockedItems.
     */
    cursor?: LockedItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockedItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockedItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LockedItems.
     */
    distinct?: LockedItemScalarFieldEnum | LockedItemScalarFieldEnum[];
  };

  /**
   * LockedItem findMany
   */
  export type LockedItemFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedItem
     */
    select?: LockedItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedItem
     */
    omit?: LockedItemOmit<ExtArgs> | null;
    /**
     * Filter, which LockedItems to fetch.
     */
    where?: LockedItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockedItems to fetch.
     */
    orderBy?:
      | LockedItemOrderByWithRelationInput
      | LockedItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LockedItems.
     */
    cursor?: LockedItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockedItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockedItems.
     */
    skip?: number;
    distinct?: LockedItemScalarFieldEnum | LockedItemScalarFieldEnum[];
  };

  /**
   * LockedItem create
   */
  export type LockedItemCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedItem
     */
    select?: LockedItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedItem
     */
    omit?: LockedItemOmit<ExtArgs> | null;
    /**
     * The data needed to create a LockedItem.
     */
    data?: XOR<LockedItemCreateInput, LockedItemUncheckedCreateInput>;
  };

  /**
   * LockedItem createMany
   */
  export type LockedItemCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many LockedItems.
     */
    data: LockedItemCreateManyInput | LockedItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * LockedItem createManyAndReturn
   */
  export type LockedItemCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedItem
     */
    select?: LockedItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedItem
     */
    omit?: LockedItemOmit<ExtArgs> | null;
    /**
     * The data used to create many LockedItems.
     */
    data: LockedItemCreateManyInput | LockedItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * LockedItem update
   */
  export type LockedItemUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedItem
     */
    select?: LockedItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedItem
     */
    omit?: LockedItemOmit<ExtArgs> | null;
    /**
     * The data needed to update a LockedItem.
     */
    data: XOR<LockedItemUpdateInput, LockedItemUncheckedUpdateInput>;
    /**
     * Choose, which LockedItem to update.
     */
    where: LockedItemWhereUniqueInput;
  };

  /**
   * LockedItem updateMany
   */
  export type LockedItemUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update LockedItems.
     */
    data: XOR<
      LockedItemUpdateManyMutationInput,
      LockedItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which LockedItems to update
     */
    where?: LockedItemWhereInput;
    /**
     * Limit how many LockedItems to update.
     */
    limit?: number;
  };

  /**
   * LockedItem updateManyAndReturn
   */
  export type LockedItemUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedItem
     */
    select?: LockedItemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedItem
     */
    omit?: LockedItemOmit<ExtArgs> | null;
    /**
     * The data used to update LockedItems.
     */
    data: XOR<
      LockedItemUpdateManyMutationInput,
      LockedItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which LockedItems to update
     */
    where?: LockedItemWhereInput;
    /**
     * Limit how many LockedItems to update.
     */
    limit?: number;
  };

  /**
   * LockedItem upsert
   */
  export type LockedItemUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedItem
     */
    select?: LockedItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedItem
     */
    omit?: LockedItemOmit<ExtArgs> | null;
    /**
     * The filter to search for the LockedItem to update in case it exists.
     */
    where: LockedItemWhereUniqueInput;
    /**
     * In case the LockedItem found by the `where` argument doesn't exist, create a new LockedItem with this data.
     */
    create: XOR<LockedItemCreateInput, LockedItemUncheckedCreateInput>;
    /**
     * In case the LockedItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LockedItemUpdateInput, LockedItemUncheckedUpdateInput>;
  };

  /**
   * LockedItem delete
   */
  export type LockedItemDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedItem
     */
    select?: LockedItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedItem
     */
    omit?: LockedItemOmit<ExtArgs> | null;
    /**
     * Filter which LockedItem to delete.
     */
    where: LockedItemWhereUniqueInput;
  };

  /**
   * LockedItem deleteMany
   */
  export type LockedItemDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which LockedItems to delete
     */
    where?: LockedItemWhereInput;
    /**
     * Limit how many LockedItems to delete.
     */
    limit?: number;
  };

  /**
   * LockedItem without action
   */
  export type LockedItemDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LockedItem
     */
    select?: LockedItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockedItem
     */
    omit?: LockedItemOmit<ExtArgs> | null;
  };

  /**
   * Model EventTicketChecker
   */

  export type AggregateEventTicketChecker = {
    _count: EventTicketCheckerCountAggregateOutputType | null;
    _min: EventTicketCheckerMinAggregateOutputType | null;
    _max: EventTicketCheckerMaxAggregateOutputType | null;
  };

  export type EventTicketCheckerMinAggregateOutputType = {
    id: string | null;
  };

  export type EventTicketCheckerMaxAggregateOutputType = {
    id: string | null;
  };

  export type EventTicketCheckerCountAggregateOutputType = {
    id: number;
    _all: number;
  };

  export type EventTicketCheckerMinAggregateInputType = {
    id?: true;
  };

  export type EventTicketCheckerMaxAggregateInputType = {
    id?: true;
  };

  export type EventTicketCheckerCountAggregateInputType = {
    id?: true;
    _all?: true;
  };

  export type EventTicketCheckerAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which EventTicketChecker to aggregate.
     */
    where?: EventTicketCheckerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventTicketCheckers to fetch.
     */
    orderBy?:
      | EventTicketCheckerOrderByWithRelationInput
      | EventTicketCheckerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: EventTicketCheckerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventTicketCheckers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventTicketCheckers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EventTicketCheckers
     **/
    _count?: true | EventTicketCheckerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EventTicketCheckerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EventTicketCheckerMaxAggregateInputType;
  };

  export type GetEventTicketCheckerAggregateType<
    T extends EventTicketCheckerAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateEventTicketChecker]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventTicketChecker[P]>
      : GetScalarType<T[P], AggregateEventTicketChecker[P]>;
  };

  export type EventTicketCheckerGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EventTicketCheckerWhereInput;
    orderBy?:
      | EventTicketCheckerOrderByWithAggregationInput
      | EventTicketCheckerOrderByWithAggregationInput[];
    by: EventTicketCheckerScalarFieldEnum[] | EventTicketCheckerScalarFieldEnum;
    having?: EventTicketCheckerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventTicketCheckerCountAggregateInputType | true;
    _min?: EventTicketCheckerMinAggregateInputType;
    _max?: EventTicketCheckerMaxAggregateInputType;
  };

  export type EventTicketCheckerGroupByOutputType = {
    id: string;
    _count: EventTicketCheckerCountAggregateOutputType | null;
    _min: EventTicketCheckerMinAggregateOutputType | null;
    _max: EventTicketCheckerMaxAggregateOutputType | null;
  };

  type GetEventTicketCheckerGroupByPayload<
    T extends EventTicketCheckerGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventTicketCheckerGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof EventTicketCheckerGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EventTicketCheckerGroupByOutputType[P]>
          : GetScalarType<T[P], EventTicketCheckerGroupByOutputType[P]>;
      }
    >
  >;

  export type EventTicketCheckerSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["eventTicketChecker"]
  >;

  export type EventTicketCheckerSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["eventTicketChecker"]
  >;

  export type EventTicketCheckerSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs["result"]["eventTicketChecker"]
  >;

  export type EventTicketCheckerSelectScalar = {
    id?: boolean;
  };

  export type EventTicketCheckerOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<"id", ExtArgs["result"]["eventTicketChecker"]>;

  export type $EventTicketCheckerPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "EventTicketChecker";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
      },
      ExtArgs["result"]["eventTicketChecker"]
    >;
    composites: {};
  };

  type EventTicketCheckerGetPayload<
    S extends boolean | null | undefined | EventTicketCheckerDefaultArgs,
  > = $Result.GetResult<Prisma.$EventTicketCheckerPayload, S>;

  type EventTicketCheckerCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    EventTicketCheckerFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: EventTicketCheckerCountAggregateInputType | true;
  };

  export interface EventTicketCheckerDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["EventTicketChecker"];
      meta: { name: "EventTicketChecker" };
    };
    /**
     * Find zero or one EventTicketChecker that matches the filter.
     * @param {EventTicketCheckerFindUniqueArgs} args - Arguments to find a EventTicketChecker
     * @example
     * // Get one EventTicketChecker
     * const eventTicketChecker = await prisma.eventTicketChecker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventTicketCheckerFindUniqueArgs>(
      args: SelectSubset<T, EventTicketCheckerFindUniqueArgs<ExtArgs>>,
    ): Prisma__EventTicketCheckerClient<
      $Result.GetResult<
        Prisma.$EventTicketCheckerPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one EventTicketChecker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventTicketCheckerFindUniqueOrThrowArgs} args - Arguments to find a EventTicketChecker
     * @example
     * // Get one EventTicketChecker
     * const eventTicketChecker = await prisma.eventTicketChecker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventTicketCheckerFindUniqueOrThrowArgs>(
      args: SelectSubset<T, EventTicketCheckerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__EventTicketCheckerClient<
      $Result.GetResult<
        Prisma.$EventTicketCheckerPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first EventTicketChecker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTicketCheckerFindFirstArgs} args - Arguments to find a EventTicketChecker
     * @example
     * // Get one EventTicketChecker
     * const eventTicketChecker = await prisma.eventTicketChecker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventTicketCheckerFindFirstArgs>(
      args?: SelectSubset<T, EventTicketCheckerFindFirstArgs<ExtArgs>>,
    ): Prisma__EventTicketCheckerClient<
      $Result.GetResult<
        Prisma.$EventTicketCheckerPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first EventTicketChecker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTicketCheckerFindFirstOrThrowArgs} args - Arguments to find a EventTicketChecker
     * @example
     * // Get one EventTicketChecker
     * const eventTicketChecker = await prisma.eventTicketChecker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventTicketCheckerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EventTicketCheckerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__EventTicketCheckerClient<
      $Result.GetResult<
        Prisma.$EventTicketCheckerPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more EventTicketCheckers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTicketCheckerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventTicketCheckers
     * const eventTicketCheckers = await prisma.eventTicketChecker.findMany()
     *
     * // Get first 10 EventTicketCheckers
     * const eventTicketCheckers = await prisma.eventTicketChecker.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventTicketCheckerWithIdOnly = await prisma.eventTicketChecker.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventTicketCheckerFindManyArgs>(
      args?: SelectSubset<T, EventTicketCheckerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EventTicketCheckerPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a EventTicketChecker.
     * @param {EventTicketCheckerCreateArgs} args - Arguments to create a EventTicketChecker.
     * @example
     * // Create one EventTicketChecker
     * const EventTicketChecker = await prisma.eventTicketChecker.create({
     *   data: {
     *     // ... data to create a EventTicketChecker
     *   }
     * })
     *
     */
    create<T extends EventTicketCheckerCreateArgs>(
      args: SelectSubset<T, EventTicketCheckerCreateArgs<ExtArgs>>,
    ): Prisma__EventTicketCheckerClient<
      $Result.GetResult<
        Prisma.$EventTicketCheckerPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many EventTicketCheckers.
     * @param {EventTicketCheckerCreateManyArgs} args - Arguments to create many EventTicketCheckers.
     * @example
     * // Create many EventTicketCheckers
     * const eventTicketChecker = await prisma.eventTicketChecker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventTicketCheckerCreateManyArgs>(
      args?: SelectSubset<T, EventTicketCheckerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many EventTicketCheckers and returns the data saved in the database.
     * @param {EventTicketCheckerCreateManyAndReturnArgs} args - Arguments to create many EventTicketCheckers.
     * @example
     * // Create many EventTicketCheckers
     * const eventTicketChecker = await prisma.eventTicketChecker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EventTicketCheckers and only return the `id`
     * const eventTicketCheckerWithIdOnly = await prisma.eventTicketChecker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventTicketCheckerCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        EventTicketCheckerCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EventTicketCheckerPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a EventTicketChecker.
     * @param {EventTicketCheckerDeleteArgs} args - Arguments to delete one EventTicketChecker.
     * @example
     * // Delete one EventTicketChecker
     * const EventTicketChecker = await prisma.eventTicketChecker.delete({
     *   where: {
     *     // ... filter to delete one EventTicketChecker
     *   }
     * })
     *
     */
    delete<T extends EventTicketCheckerDeleteArgs>(
      args: SelectSubset<T, EventTicketCheckerDeleteArgs<ExtArgs>>,
    ): Prisma__EventTicketCheckerClient<
      $Result.GetResult<
        Prisma.$EventTicketCheckerPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one EventTicketChecker.
     * @param {EventTicketCheckerUpdateArgs} args - Arguments to update one EventTicketChecker.
     * @example
     * // Update one EventTicketChecker
     * const eventTicketChecker = await prisma.eventTicketChecker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventTicketCheckerUpdateArgs>(
      args: SelectSubset<T, EventTicketCheckerUpdateArgs<ExtArgs>>,
    ): Prisma__EventTicketCheckerClient<
      $Result.GetResult<
        Prisma.$EventTicketCheckerPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more EventTicketCheckers.
     * @param {EventTicketCheckerDeleteManyArgs} args - Arguments to filter EventTicketCheckers to delete.
     * @example
     * // Delete a few EventTicketCheckers
     * const { count } = await prisma.eventTicketChecker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventTicketCheckerDeleteManyArgs>(
      args?: SelectSubset<T, EventTicketCheckerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more EventTicketCheckers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTicketCheckerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventTicketCheckers
     * const eventTicketChecker = await prisma.eventTicketChecker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventTicketCheckerUpdateManyArgs>(
      args: SelectSubset<T, EventTicketCheckerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more EventTicketCheckers and returns the data updated in the database.
     * @param {EventTicketCheckerUpdateManyAndReturnArgs} args - Arguments to update many EventTicketCheckers.
     * @example
     * // Update many EventTicketCheckers
     * const eventTicketChecker = await prisma.eventTicketChecker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EventTicketCheckers and only return the `id`
     * const eventTicketCheckerWithIdOnly = await prisma.eventTicketChecker.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends EventTicketCheckerUpdateManyAndReturnArgs>(
      args: SelectSubset<T, EventTicketCheckerUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EventTicketCheckerPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one EventTicketChecker.
     * @param {EventTicketCheckerUpsertArgs} args - Arguments to update or create a EventTicketChecker.
     * @example
     * // Update or create a EventTicketChecker
     * const eventTicketChecker = await prisma.eventTicketChecker.upsert({
     *   create: {
     *     // ... data to create a EventTicketChecker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventTicketChecker we want to update
     *   }
     * })
     */
    upsert<T extends EventTicketCheckerUpsertArgs>(
      args: SelectSubset<T, EventTicketCheckerUpsertArgs<ExtArgs>>,
    ): Prisma__EventTicketCheckerClient<
      $Result.GetResult<
        Prisma.$EventTicketCheckerPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of EventTicketCheckers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTicketCheckerCountArgs} args - Arguments to filter EventTicketCheckers to count.
     * @example
     * // Count the number of EventTicketCheckers
     * const count = await prisma.eventTicketChecker.count({
     *   where: {
     *     // ... the filter for the EventTicketCheckers we want to count
     *   }
     * })
     **/
    count<T extends EventTicketCheckerCountArgs>(
      args?: Subset<T, EventTicketCheckerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<
              T["select"],
              EventTicketCheckerCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a EventTicketChecker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTicketCheckerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EventTicketCheckerAggregateArgs>(
      args: Subset<T, EventTicketCheckerAggregateArgs>,
    ): Prisma.PrismaPromise<GetEventTicketCheckerAggregateType<T>>;

    /**
     * Group by EventTicketChecker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTicketCheckerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends EventTicketCheckerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventTicketCheckerGroupByArgs["orderBy"] }
        : { orderBy?: EventTicketCheckerGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, EventTicketCheckerGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetEventTicketCheckerGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EventTicketChecker model
     */
    readonly fields: EventTicketCheckerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventTicketChecker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventTicketCheckerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the EventTicketChecker model
   */
  interface EventTicketCheckerFieldRefs {
    readonly id: FieldRef<"EventTicketChecker", "String">;
  }

  // Custom InputTypes
  /**
   * EventTicketChecker findUnique
   */
  export type EventTicketCheckerFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventTicketChecker
     */
    select?: EventTicketCheckerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventTicketChecker
     */
    omit?: EventTicketCheckerOmit<ExtArgs> | null;
    /**
     * Filter, which EventTicketChecker to fetch.
     */
    where: EventTicketCheckerWhereUniqueInput;
  };

  /**
   * EventTicketChecker findUniqueOrThrow
   */
  export type EventTicketCheckerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventTicketChecker
     */
    select?: EventTicketCheckerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventTicketChecker
     */
    omit?: EventTicketCheckerOmit<ExtArgs> | null;
    /**
     * Filter, which EventTicketChecker to fetch.
     */
    where: EventTicketCheckerWhereUniqueInput;
  };

  /**
   * EventTicketChecker findFirst
   */
  export type EventTicketCheckerFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventTicketChecker
     */
    select?: EventTicketCheckerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventTicketChecker
     */
    omit?: EventTicketCheckerOmit<ExtArgs> | null;
    /**
     * Filter, which EventTicketChecker to fetch.
     */
    where?: EventTicketCheckerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventTicketCheckers to fetch.
     */
    orderBy?:
      | EventTicketCheckerOrderByWithRelationInput
      | EventTicketCheckerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventTicketCheckers.
     */
    cursor?: EventTicketCheckerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventTicketCheckers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventTicketCheckers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventTicketCheckers.
     */
    distinct?:
      | EventTicketCheckerScalarFieldEnum
      | EventTicketCheckerScalarFieldEnum[];
  };

  /**
   * EventTicketChecker findFirstOrThrow
   */
  export type EventTicketCheckerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventTicketChecker
     */
    select?: EventTicketCheckerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventTicketChecker
     */
    omit?: EventTicketCheckerOmit<ExtArgs> | null;
    /**
     * Filter, which EventTicketChecker to fetch.
     */
    where?: EventTicketCheckerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventTicketCheckers to fetch.
     */
    orderBy?:
      | EventTicketCheckerOrderByWithRelationInput
      | EventTicketCheckerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventTicketCheckers.
     */
    cursor?: EventTicketCheckerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventTicketCheckers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventTicketCheckers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventTicketCheckers.
     */
    distinct?:
      | EventTicketCheckerScalarFieldEnum
      | EventTicketCheckerScalarFieldEnum[];
  };

  /**
   * EventTicketChecker findMany
   */
  export type EventTicketCheckerFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventTicketChecker
     */
    select?: EventTicketCheckerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventTicketChecker
     */
    omit?: EventTicketCheckerOmit<ExtArgs> | null;
    /**
     * Filter, which EventTicketCheckers to fetch.
     */
    where?: EventTicketCheckerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventTicketCheckers to fetch.
     */
    orderBy?:
      | EventTicketCheckerOrderByWithRelationInput
      | EventTicketCheckerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EventTicketCheckers.
     */
    cursor?: EventTicketCheckerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventTicketCheckers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventTicketCheckers.
     */
    skip?: number;
    distinct?:
      | EventTicketCheckerScalarFieldEnum
      | EventTicketCheckerScalarFieldEnum[];
  };

  /**
   * EventTicketChecker create
   */
  export type EventTicketCheckerCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventTicketChecker
     */
    select?: EventTicketCheckerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventTicketChecker
     */
    omit?: EventTicketCheckerOmit<ExtArgs> | null;
    /**
     * The data needed to create a EventTicketChecker.
     */
    data?: XOR<
      EventTicketCheckerCreateInput,
      EventTicketCheckerUncheckedCreateInput
    >;
  };

  /**
   * EventTicketChecker createMany
   */
  export type EventTicketCheckerCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many EventTicketCheckers.
     */
    data:
      | EventTicketCheckerCreateManyInput
      | EventTicketCheckerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * EventTicketChecker createManyAndReturn
   */
  export type EventTicketCheckerCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventTicketChecker
     */
    select?: EventTicketCheckerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventTicketChecker
     */
    omit?: EventTicketCheckerOmit<ExtArgs> | null;
    /**
     * The data used to create many EventTicketCheckers.
     */
    data:
      | EventTicketCheckerCreateManyInput
      | EventTicketCheckerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * EventTicketChecker update
   */
  export type EventTicketCheckerUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventTicketChecker
     */
    select?: EventTicketCheckerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventTicketChecker
     */
    omit?: EventTicketCheckerOmit<ExtArgs> | null;
    /**
     * The data needed to update a EventTicketChecker.
     */
    data: XOR<
      EventTicketCheckerUpdateInput,
      EventTicketCheckerUncheckedUpdateInput
    >;
    /**
     * Choose, which EventTicketChecker to update.
     */
    where: EventTicketCheckerWhereUniqueInput;
  };

  /**
   * EventTicketChecker updateMany
   */
  export type EventTicketCheckerUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update EventTicketCheckers.
     */
    data: XOR<
      EventTicketCheckerUpdateManyMutationInput,
      EventTicketCheckerUncheckedUpdateManyInput
    >;
    /**
     * Filter which EventTicketCheckers to update
     */
    where?: EventTicketCheckerWhereInput;
    /**
     * Limit how many EventTicketCheckers to update.
     */
    limit?: number;
  };

  /**
   * EventTicketChecker updateManyAndReturn
   */
  export type EventTicketCheckerUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventTicketChecker
     */
    select?: EventTicketCheckerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventTicketChecker
     */
    omit?: EventTicketCheckerOmit<ExtArgs> | null;
    /**
     * The data used to update EventTicketCheckers.
     */
    data: XOR<
      EventTicketCheckerUpdateManyMutationInput,
      EventTicketCheckerUncheckedUpdateManyInput
    >;
    /**
     * Filter which EventTicketCheckers to update
     */
    where?: EventTicketCheckerWhereInput;
    /**
     * Limit how many EventTicketCheckers to update.
     */
    limit?: number;
  };

  /**
   * EventTicketChecker upsert
   */
  export type EventTicketCheckerUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventTicketChecker
     */
    select?: EventTicketCheckerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventTicketChecker
     */
    omit?: EventTicketCheckerOmit<ExtArgs> | null;
    /**
     * The filter to search for the EventTicketChecker to update in case it exists.
     */
    where: EventTicketCheckerWhereUniqueInput;
    /**
     * In case the EventTicketChecker found by the `where` argument doesn't exist, create a new EventTicketChecker with this data.
     */
    create: XOR<
      EventTicketCheckerCreateInput,
      EventTicketCheckerUncheckedCreateInput
    >;
    /**
     * In case the EventTicketChecker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      EventTicketCheckerUpdateInput,
      EventTicketCheckerUncheckedUpdateInput
    >;
  };

  /**
   * EventTicketChecker delete
   */
  export type EventTicketCheckerDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventTicketChecker
     */
    select?: EventTicketCheckerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventTicketChecker
     */
    omit?: EventTicketCheckerOmit<ExtArgs> | null;
    /**
     * Filter which EventTicketChecker to delete.
     */
    where: EventTicketCheckerWhereUniqueInput;
  };

  /**
   * EventTicketChecker deleteMany
   */
  export type EventTicketCheckerDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which EventTicketCheckers to delete
     */
    where?: EventTicketCheckerWhereInput;
    /**
     * Limit how many EventTicketCheckers to delete.
     */
    limit?: number;
  };

  /**
   * EventTicketChecker without action
   */
  export type EventTicketCheckerDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventTicketChecker
     */
    select?: EventTicketCheckerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventTicketChecker
     */
    omit?: EventTicketCheckerOmit<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AccountScalarFieldEnum: {
    id: "id";
    email: "email";
    firstName: "firstName";
    password: "password";
    lastName: "lastName";
    refreshToken: "refreshToken";
    isVerified: "isVerified";
    avatarUrl: "avatarUrl";
    role: "role";
    walletId: "walletId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type AccountScalarFieldEnum =
    (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];

  export const WalletScalarFieldEnum: {
    id: "id";
    totalBalance: "totalBalance";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type WalletScalarFieldEnum =
    (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum];

  export const TransactionScalarFieldEnum: {
    id: "id";
    walletId: "walletId";
    amount: "amount";
    currency: "currency";
    type: "type";
    status: "status";
    description: "description";
    metadata: "metadata";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type TransactionScalarFieldEnum =
    (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: "id";
    accountId: "accountId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: "id";
    organizationName: "organizationName";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const OrganizerScalarFieldEnum: {
    id: "id";
    accountId: "accountId";
    organizationId: "organizationId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type OrganizerScalarFieldEnum =
    (typeof OrganizerScalarFieldEnum)[keyof typeof OrganizerScalarFieldEnum];

  export const EventScalarFieldEnum: {
    id: "id";
    title: "title";
    description: "description";
    bannerUrl: "bannerUrl";
    gallery: "gallery";
    location: "location";
    venue: "venue";
    currency: "currency";
    onDate: "onDate";
    timezone: "timezone";
    duration: "duration";
    eventType: "eventType";
    eventStatus: "eventStatus";
    organizationId: "organizationId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type EventScalarFieldEnum =
    (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];

  export const ReviewScalarFieldEnum: {
    id: "id";
    rating: "rating";
    message: "message";
    eventId: "eventId";
    userId: "userId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type ReviewScalarFieldEnum =
    (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];

  export const TicketTypeScalarFieldEnum: {
    id: "id";
    eventId: "eventId";
    name: "name";
    description: "description";
    total: "total";
    locked: "locked";
    booked: "booked";
    price: "price";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type TicketTypeScalarFieldEnum =
    (typeof TicketTypeScalarFieldEnum)[keyof typeof TicketTypeScalarFieldEnum];

  export const NotificationScalarFieldEnum: {
    id: "id";
  };

  export type NotificationScalarFieldEnum =
    (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];

  export const BookingScalarFieldEnum: {
    id: "id";
  };

  export type BookingScalarFieldEnum =
    (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum];

  export const BookingItemScalarFieldEnum: {
    id: "id";
  };

  export type BookingItemScalarFieldEnum =
    (typeof BookingItemScalarFieldEnum)[keyof typeof BookingItemScalarFieldEnum];

  export const LockedTicketScalarFieldEnum: {
    id: "id";
  };

  export type LockedTicketScalarFieldEnum =
    (typeof LockedTicketScalarFieldEnum)[keyof typeof LockedTicketScalarFieldEnum];

  export const LockedItemScalarFieldEnum: {
    id: "id";
  };

  export type LockedItemScalarFieldEnum =
    (typeof LockedItemScalarFieldEnum)[keyof typeof LockedItemScalarFieldEnum];

  export const EventTicketCheckerScalarFieldEnum: {
    id: "id";
  };

  export type EventTicketCheckerScalarFieldEnum =
    (typeof EventTicketCheckerScalarFieldEnum)[keyof typeof EventTicketCheckerScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
  };

  export type NullableJsonNullValueInput =
    (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Boolean"
  >;

  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Role"
  >;

  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Role[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Reference to a field of type 'Currency'
   */
  export type EnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Currency"
  >;

  /**
   * Reference to a field of type 'Currency[]'
   */
  export type ListEnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Currency[]"
  >;

  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "TransactionType">;

  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "TransactionType[]">;

  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "TransactionStatus">;

  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "TransactionStatus[]">;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Json"
  >;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "QueryMode"
  >;

  /**
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "EventType"
  >;

  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "EventType[]"
  >;

  /**
   * Reference to a field of type 'EventStatus'
   */
  export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "EventStatus"
  >;

  /**
   * Reference to a field of type 'EventStatus[]'
   */
  export type ListEnumEventStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "EventStatus[]">;

  /**
   * Deep Input Types
   */

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[];
    OR?: AccountWhereInput[];
    NOT?: AccountWhereInput | AccountWhereInput[];
    id?: StringFilter<"Account"> | string;
    email?: StringFilter<"Account"> | string;
    firstName?: StringFilter<"Account"> | string;
    password?: StringFilter<"Account"> | string;
    lastName?: StringFilter<"Account"> | string;
    refreshToken?: StringNullableFilter<"Account"> | string | null;
    isVerified?: BoolFilter<"Account"> | boolean;
    avatarUrl?: StringFilter<"Account"> | string;
    role?: EnumRoleFilter<"Account"> | $Enums.Role;
    walletId?: StringFilter<"Account"> | string;
    createdAt?: DateTimeFilter<"Account"> | Date | string;
    updatedAt?: DateTimeFilter<"Account"> | Date | string;
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>;
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
    organizer?: XOR<
      OrganizerNullableScalarRelationFilter,
      OrganizerWhereInput
    > | null;
  };

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    password?: SortOrder;
    lastName?: SortOrder;
    refreshToken?: SortOrderInput | SortOrder;
    isVerified?: SortOrder;
    avatarUrl?: SortOrder;
    role?: SortOrder;
    walletId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    wallet?: WalletOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
    organizer?: OrganizerOrderByWithRelationInput;
  };

  export type AccountWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      walletId?: string;
      AND?: AccountWhereInput | AccountWhereInput[];
      OR?: AccountWhereInput[];
      NOT?: AccountWhereInput | AccountWhereInput[];
      firstName?: StringFilter<"Account"> | string;
      password?: StringFilter<"Account"> | string;
      lastName?: StringFilter<"Account"> | string;
      refreshToken?: StringNullableFilter<"Account"> | string | null;
      isVerified?: BoolFilter<"Account"> | boolean;
      avatarUrl?: StringFilter<"Account"> | string;
      role?: EnumRoleFilter<"Account"> | $Enums.Role;
      createdAt?: DateTimeFilter<"Account"> | Date | string;
      updatedAt?: DateTimeFilter<"Account"> | Date | string;
      wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>;
      user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
      organizer?: XOR<
        OrganizerNullableScalarRelationFilter,
        OrganizerWhereInput
      > | null;
    },
    "id" | "email" | "walletId"
  >;

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    password?: SortOrder;
    lastName?: SortOrder;
    refreshToken?: SortOrderInput | SortOrder;
    isVerified?: SortOrder;
    avatarUrl?: SortOrder;
    role?: SortOrder;
    walletId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: AccountCountOrderByAggregateInput;
    _max?: AccountMaxOrderByAggregateInput;
    _min?: AccountMinOrderByAggregateInput;
  };

  export type AccountScalarWhereWithAggregatesInput = {
    AND?:
      | AccountScalarWhereWithAggregatesInput
      | AccountScalarWhereWithAggregatesInput[];
    OR?: AccountScalarWhereWithAggregatesInput[];
    NOT?:
      | AccountScalarWhereWithAggregatesInput
      | AccountScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Account"> | string;
    email?: StringWithAggregatesFilter<"Account"> | string;
    firstName?: StringWithAggregatesFilter<"Account"> | string;
    password?: StringWithAggregatesFilter<"Account"> | string;
    lastName?: StringWithAggregatesFilter<"Account"> | string;
    refreshToken?:
      | StringNullableWithAggregatesFilter<"Account">
      | string
      | null;
    isVerified?: BoolWithAggregatesFilter<"Account"> | boolean;
    avatarUrl?: StringWithAggregatesFilter<"Account"> | string;
    role?: EnumRoleWithAggregatesFilter<"Account"> | $Enums.Role;
    walletId?: StringWithAggregatesFilter<"Account"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string;
  };

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[];
    OR?: WalletWhereInput[];
    NOT?: WalletWhereInput | WalletWhereInput[];
    id?: StringFilter<"Wallet"> | string;
    totalBalance?: IntFilter<"Wallet"> | number;
    createdAt?: DateTimeFilter<"Wallet"> | Date | string;
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string;
    account?: XOR<
      AccountNullableScalarRelationFilter,
      AccountWhereInput
    > | null;
    transactions?: TransactionListRelationFilter;
  };

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder;
    totalBalance?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    account?: AccountOrderByWithRelationInput;
    transactions?: TransactionOrderByRelationAggregateInput;
  };

  export type WalletWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: WalletWhereInput | WalletWhereInput[];
      OR?: WalletWhereInput[];
      NOT?: WalletWhereInput | WalletWhereInput[];
      totalBalance?: IntFilter<"Wallet"> | number;
      createdAt?: DateTimeFilter<"Wallet"> | Date | string;
      updatedAt?: DateTimeFilter<"Wallet"> | Date | string;
      account?: XOR<
        AccountNullableScalarRelationFilter,
        AccountWhereInput
      > | null;
      transactions?: TransactionListRelationFilter;
    },
    "id"
  >;

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder;
    totalBalance?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: WalletCountOrderByAggregateInput;
    _avg?: WalletAvgOrderByAggregateInput;
    _max?: WalletMaxOrderByAggregateInput;
    _min?: WalletMinOrderByAggregateInput;
    _sum?: WalletSumOrderByAggregateInput;
  };

  export type WalletScalarWhereWithAggregatesInput = {
    AND?:
      | WalletScalarWhereWithAggregatesInput
      | WalletScalarWhereWithAggregatesInput[];
    OR?: WalletScalarWhereWithAggregatesInput[];
    NOT?:
      | WalletScalarWhereWithAggregatesInput
      | WalletScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Wallet"> | string;
    totalBalance?: IntWithAggregatesFilter<"Wallet"> | number;
    createdAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string;
  };

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[];
    OR?: TransactionWhereInput[];
    NOT?: TransactionWhereInput | TransactionWhereInput[];
    id?: StringFilter<"Transaction"> | string;
    walletId?: StringFilter<"Transaction"> | string;
    amount?: FloatFilter<"Transaction"> | number;
    currency?: EnumCurrencyFilter<"Transaction"> | $Enums.Currency;
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFilter<"Transaction">
      | $Enums.TransactionStatus;
    description?: StringNullableFilter<"Transaction"> | string | null;
    metadata?: JsonNullableFilter<"Transaction">;
    createdAt?: DateTimeFilter<"Transaction"> | Date | string;
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string;
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>;
  };

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder;
    walletId?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    description?: SortOrderInput | SortOrder;
    metadata?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    wallet?: WalletOrderByWithRelationInput;
  };

  export type TransactionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TransactionWhereInput | TransactionWhereInput[];
      OR?: TransactionWhereInput[];
      NOT?: TransactionWhereInput | TransactionWhereInput[];
      walletId?: StringFilter<"Transaction"> | string;
      amount?: FloatFilter<"Transaction"> | number;
      currency?: EnumCurrencyFilter<"Transaction"> | $Enums.Currency;
      type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType;
      status?:
        | EnumTransactionStatusFilter<"Transaction">
        | $Enums.TransactionStatus;
      description?: StringNullableFilter<"Transaction"> | string | null;
      metadata?: JsonNullableFilter<"Transaction">;
      createdAt?: DateTimeFilter<"Transaction"> | Date | string;
      updatedAt?: DateTimeFilter<"Transaction"> | Date | string;
      wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>;
    },
    "id"
  >;

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder;
    walletId?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    description?: SortOrderInput | SortOrder;
    metadata?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: TransactionCountOrderByAggregateInput;
    _avg?: TransactionAvgOrderByAggregateInput;
    _max?: TransactionMaxOrderByAggregateInput;
    _min?: TransactionMinOrderByAggregateInput;
    _sum?: TransactionSumOrderByAggregateInput;
  };

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?:
      | TransactionScalarWhereWithAggregatesInput
      | TransactionScalarWhereWithAggregatesInput[];
    OR?: TransactionScalarWhereWithAggregatesInput[];
    NOT?:
      | TransactionScalarWhereWithAggregatesInput
      | TransactionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Transaction"> | string;
    walletId?: StringWithAggregatesFilter<"Transaction"> | string;
    amount?: FloatWithAggregatesFilter<"Transaction"> | number;
    currency?:
      | EnumCurrencyWithAggregatesFilter<"Transaction">
      | $Enums.Currency;
    type?:
      | EnumTransactionTypeWithAggregatesFilter<"Transaction">
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusWithAggregatesFilter<"Transaction">
      | $Enums.TransactionStatus;
    description?:
      | StringNullableWithAggregatesFilter<"Transaction">
      | string
      | null;
    metadata?: JsonNullableWithAggregatesFilter<"Transaction">;
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string;
  };

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<"User"> | string;
    accountId?: StringFilter<"User"> | string;
    createdAt?: DateTimeFilter<"User"> | Date | string;
    updatedAt?: DateTimeFilter<"User"> | Date | string;
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>;
    reviews?: ReviewListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    accountId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    account?: AccountOrderByWithRelationInput;
    reviews?: ReviewOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      accountId?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      createdAt?: DateTimeFilter<"User"> | Date | string;
      updatedAt?: DateTimeFilter<"User"> | Date | string;
      account?: XOR<AccountScalarRelationFilter, AccountWhereInput>;
      reviews?: ReviewListRelationFilter;
    },
    "id" | "accountId"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    accountId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"User"> | string;
    accountId?: StringWithAggregatesFilter<"User"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
  };

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[];
    OR?: OrganizationWhereInput[];
    NOT?: OrganizationWhereInput | OrganizationWhereInput[];
    id?: StringFilter<"Organization"> | string;
    organizationName?: StringFilter<"Organization"> | string;
    createdAt?: DateTimeFilter<"Organization"> | Date | string;
    updatedAt?: DateTimeFilter<"Organization"> | Date | string;
    members?: OrganizerListRelationFilter;
    events?: EventListRelationFilter;
  };

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder;
    organizationName?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    members?: OrganizerOrderByRelationAggregateInput;
    events?: EventOrderByRelationAggregateInput;
  };

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      organizationName?: string;
      AND?: OrganizationWhereInput | OrganizationWhereInput[];
      OR?: OrganizationWhereInput[];
      NOT?: OrganizationWhereInput | OrganizationWhereInput[];
      createdAt?: DateTimeFilter<"Organization"> | Date | string;
      updatedAt?: DateTimeFilter<"Organization"> | Date | string;
      members?: OrganizerListRelationFilter;
      events?: EventListRelationFilter;
    },
    "id" | "organizationName"
  >;

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder;
    organizationName?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: OrganizationCountOrderByAggregateInput;
    _max?: OrganizationMaxOrderByAggregateInput;
    _min?: OrganizationMinOrderByAggregateInput;
  };

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?:
      | OrganizationScalarWhereWithAggregatesInput
      | OrganizationScalarWhereWithAggregatesInput[];
    OR?: OrganizationScalarWhereWithAggregatesInput[];
    NOT?:
      | OrganizationScalarWhereWithAggregatesInput
      | OrganizationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Organization"> | string;
    organizationName?: StringWithAggregatesFilter<"Organization"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string;
  };

  export type OrganizerWhereInput = {
    AND?: OrganizerWhereInput | OrganizerWhereInput[];
    OR?: OrganizerWhereInput[];
    NOT?: OrganizerWhereInput | OrganizerWhereInput[];
    id?: StringFilter<"Organizer"> | string;
    accountId?: StringFilter<"Organizer"> | string;
    organizationId?: StringFilter<"Organizer"> | string;
    createdAt?: DateTimeFilter<"Organizer"> | Date | string;
    updatedAt?: DateTimeFilter<"Organizer"> | Date | string;
    organization?: XOR<
      OrganizationScalarRelationFilter,
      OrganizationWhereInput
    >;
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>;
  };

  export type OrganizerOrderByWithRelationInput = {
    id?: SortOrder;
    accountId?: SortOrder;
    organizationId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    organization?: OrganizationOrderByWithRelationInput;
    account?: AccountOrderByWithRelationInput;
  };

  export type OrganizerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      accountId?: string;
      AND?: OrganizerWhereInput | OrganizerWhereInput[];
      OR?: OrganizerWhereInput[];
      NOT?: OrganizerWhereInput | OrganizerWhereInput[];
      organizationId?: StringFilter<"Organizer"> | string;
      createdAt?: DateTimeFilter<"Organizer"> | Date | string;
      updatedAt?: DateTimeFilter<"Organizer"> | Date | string;
      organization?: XOR<
        OrganizationScalarRelationFilter,
        OrganizationWhereInput
      >;
      account?: XOR<AccountScalarRelationFilter, AccountWhereInput>;
    },
    "id" | "accountId"
  >;

  export type OrganizerOrderByWithAggregationInput = {
    id?: SortOrder;
    accountId?: SortOrder;
    organizationId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: OrganizerCountOrderByAggregateInput;
    _max?: OrganizerMaxOrderByAggregateInput;
    _min?: OrganizerMinOrderByAggregateInput;
  };

  export type OrganizerScalarWhereWithAggregatesInput = {
    AND?:
      | OrganizerScalarWhereWithAggregatesInput
      | OrganizerScalarWhereWithAggregatesInput[];
    OR?: OrganizerScalarWhereWithAggregatesInput[];
    NOT?:
      | OrganizerScalarWhereWithAggregatesInput
      | OrganizerScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Organizer"> | string;
    accountId?: StringWithAggregatesFilter<"Organizer"> | string;
    organizationId?: StringWithAggregatesFilter<"Organizer"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Organizer"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Organizer"> | Date | string;
  };

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[];
    OR?: EventWhereInput[];
    NOT?: EventWhereInput | EventWhereInput[];
    id?: StringFilter<"Event"> | string;
    title?: StringFilter<"Event"> | string;
    description?: StringFilter<"Event"> | string;
    bannerUrl?: StringNullableFilter<"Event"> | string | null;
    gallery?: StringNullableListFilter<"Event">;
    location?: StringFilter<"Event"> | string;
    venue?: StringFilter<"Event"> | string;
    currency?: EnumCurrencyFilter<"Event"> | $Enums.Currency;
    onDate?: DateTimeFilter<"Event"> | Date | string;
    timezone?: StringFilter<"Event"> | string;
    duration?: FloatFilter<"Event"> | number;
    eventType?: EnumEventTypeFilter<"Event"> | $Enums.EventType;
    eventStatus?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus;
    organizationId?: StringFilter<"Event"> | string;
    createdAt?: DateTimeFilter<"Event"> | Date | string;
    updatedAt?: DateTimeFilter<"Event"> | Date | string;
    organization?: XOR<
      OrganizationScalarRelationFilter,
      OrganizationWhereInput
    >;
    ticketTypes?: TicketTypeListRelationFilter;
    reviews?: ReviewListRelationFilter;
  };

  export type EventOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    bannerUrl?: SortOrderInput | SortOrder;
    gallery?: SortOrder;
    location?: SortOrder;
    venue?: SortOrder;
    currency?: SortOrder;
    onDate?: SortOrder;
    timezone?: SortOrder;
    duration?: SortOrder;
    eventType?: SortOrder;
    eventStatus?: SortOrder;
    organizationId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    organization?: OrganizationOrderByWithRelationInput;
    ticketTypes?: TicketTypeOrderByRelationAggregateInput;
    reviews?: ReviewOrderByRelationAggregateInput;
  };

  export type EventWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: EventWhereInput | EventWhereInput[];
      OR?: EventWhereInput[];
      NOT?: EventWhereInput | EventWhereInput[];
      title?: StringFilter<"Event"> | string;
      description?: StringFilter<"Event"> | string;
      bannerUrl?: StringNullableFilter<"Event"> | string | null;
      gallery?: StringNullableListFilter<"Event">;
      location?: StringFilter<"Event"> | string;
      venue?: StringFilter<"Event"> | string;
      currency?: EnumCurrencyFilter<"Event"> | $Enums.Currency;
      onDate?: DateTimeFilter<"Event"> | Date | string;
      timezone?: StringFilter<"Event"> | string;
      duration?: FloatFilter<"Event"> | number;
      eventType?: EnumEventTypeFilter<"Event"> | $Enums.EventType;
      eventStatus?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus;
      organizationId?: StringFilter<"Event"> | string;
      createdAt?: DateTimeFilter<"Event"> | Date | string;
      updatedAt?: DateTimeFilter<"Event"> | Date | string;
      organization?: XOR<
        OrganizationScalarRelationFilter,
        OrganizationWhereInput
      >;
      ticketTypes?: TicketTypeListRelationFilter;
      reviews?: ReviewListRelationFilter;
    },
    "id"
  >;

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    bannerUrl?: SortOrderInput | SortOrder;
    gallery?: SortOrder;
    location?: SortOrder;
    venue?: SortOrder;
    currency?: SortOrder;
    onDate?: SortOrder;
    timezone?: SortOrder;
    duration?: SortOrder;
    eventType?: SortOrder;
    eventStatus?: SortOrder;
    organizationId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: EventCountOrderByAggregateInput;
    _avg?: EventAvgOrderByAggregateInput;
    _max?: EventMaxOrderByAggregateInput;
    _min?: EventMinOrderByAggregateInput;
    _sum?: EventSumOrderByAggregateInput;
  };

  export type EventScalarWhereWithAggregatesInput = {
    AND?:
      | EventScalarWhereWithAggregatesInput
      | EventScalarWhereWithAggregatesInput[];
    OR?: EventScalarWhereWithAggregatesInput[];
    NOT?:
      | EventScalarWhereWithAggregatesInput
      | EventScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Event"> | string;
    title?: StringWithAggregatesFilter<"Event"> | string;
    description?: StringWithAggregatesFilter<"Event"> | string;
    bannerUrl?: StringNullableWithAggregatesFilter<"Event"> | string | null;
    gallery?: StringNullableListFilter<"Event">;
    location?: StringWithAggregatesFilter<"Event"> | string;
    venue?: StringWithAggregatesFilter<"Event"> | string;
    currency?: EnumCurrencyWithAggregatesFilter<"Event"> | $Enums.Currency;
    onDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string;
    timezone?: StringWithAggregatesFilter<"Event"> | string;
    duration?: FloatWithAggregatesFilter<"Event"> | number;
    eventType?: EnumEventTypeWithAggregatesFilter<"Event"> | $Enums.EventType;
    eventStatus?:
      | EnumEventStatusWithAggregatesFilter<"Event">
      | $Enums.EventStatus;
    organizationId?: StringWithAggregatesFilter<"Event"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string;
  };

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[];
    OR?: ReviewWhereInput[];
    NOT?: ReviewWhereInput | ReviewWhereInput[];
    id?: StringFilter<"Review"> | string;
    rating?: IntFilter<"Review"> | number;
    message?: StringNullableFilter<"Review"> | string | null;
    eventId?: StringFilter<"Review"> | string;
    userId?: StringFilter<"Review"> | string;
    createdAt?: DateTimeFilter<"Review"> | Date | string;
    updatedAt?: DateTimeFilter<"Review"> | Date | string;
    event?: XOR<EventScalarRelationFilter, EventWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder;
    rating?: SortOrder;
    message?: SortOrderInput | SortOrder;
    eventId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    event?: EventOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type ReviewWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId_eventId?: ReviewUserIdEventIdCompoundUniqueInput;
      AND?: ReviewWhereInput | ReviewWhereInput[];
      OR?: ReviewWhereInput[];
      NOT?: ReviewWhereInput | ReviewWhereInput[];
      rating?: IntFilter<"Review"> | number;
      message?: StringNullableFilter<"Review"> | string | null;
      eventId?: StringFilter<"Review"> | string;
      userId?: StringFilter<"Review"> | string;
      createdAt?: DateTimeFilter<"Review"> | Date | string;
      updatedAt?: DateTimeFilter<"Review"> | Date | string;
      event?: XOR<EventScalarRelationFilter, EventWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "userId_eventId"
  >;

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder;
    rating?: SortOrder;
    message?: SortOrderInput | SortOrder;
    eventId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ReviewCountOrderByAggregateInput;
    _avg?: ReviewAvgOrderByAggregateInput;
    _max?: ReviewMaxOrderByAggregateInput;
    _min?: ReviewMinOrderByAggregateInput;
    _sum?: ReviewSumOrderByAggregateInput;
  };

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?:
      | ReviewScalarWhereWithAggregatesInput
      | ReviewScalarWhereWithAggregatesInput[];
    OR?: ReviewScalarWhereWithAggregatesInput[];
    NOT?:
      | ReviewScalarWhereWithAggregatesInput
      | ReviewScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Review"> | string;
    rating?: IntWithAggregatesFilter<"Review"> | number;
    message?: StringNullableWithAggregatesFilter<"Review"> | string | null;
    eventId?: StringWithAggregatesFilter<"Review"> | string;
    userId?: StringWithAggregatesFilter<"Review"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string;
  };

  export type TicketTypeWhereInput = {
    AND?: TicketTypeWhereInput | TicketTypeWhereInput[];
    OR?: TicketTypeWhereInput[];
    NOT?: TicketTypeWhereInput | TicketTypeWhereInput[];
    id?: StringFilter<"TicketType"> | string;
    eventId?: StringFilter<"TicketType"> | string;
    name?: StringFilter<"TicketType"> | string;
    description?: StringNullableFilter<"TicketType"> | string | null;
    total?: IntFilter<"TicketType"> | number;
    locked?: IntFilter<"TicketType"> | number;
    booked?: IntFilter<"TicketType"> | number;
    price?: FloatFilter<"TicketType"> | number;
    createdAt?: DateTimeFilter<"TicketType"> | Date | string;
    updatedAt?: DateTimeFilter<"TicketType"> | Date | string;
    event?: XOR<EventScalarRelationFilter, EventWhereInput>;
  };

  export type TicketTypeOrderByWithRelationInput = {
    id?: SortOrder;
    eventId?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    total?: SortOrder;
    locked?: SortOrder;
    booked?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    event?: EventOrderByWithRelationInput;
  };

  export type TicketTypeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TicketTypeWhereInput | TicketTypeWhereInput[];
      OR?: TicketTypeWhereInput[];
      NOT?: TicketTypeWhereInput | TicketTypeWhereInput[];
      eventId?: StringFilter<"TicketType"> | string;
      name?: StringFilter<"TicketType"> | string;
      description?: StringNullableFilter<"TicketType"> | string | null;
      total?: IntFilter<"TicketType"> | number;
      locked?: IntFilter<"TicketType"> | number;
      booked?: IntFilter<"TicketType"> | number;
      price?: FloatFilter<"TicketType"> | number;
      createdAt?: DateTimeFilter<"TicketType"> | Date | string;
      updatedAt?: DateTimeFilter<"TicketType"> | Date | string;
      event?: XOR<EventScalarRelationFilter, EventWhereInput>;
    },
    "id"
  >;

  export type TicketTypeOrderByWithAggregationInput = {
    id?: SortOrder;
    eventId?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    total?: SortOrder;
    locked?: SortOrder;
    booked?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: TicketTypeCountOrderByAggregateInput;
    _avg?: TicketTypeAvgOrderByAggregateInput;
    _max?: TicketTypeMaxOrderByAggregateInput;
    _min?: TicketTypeMinOrderByAggregateInput;
    _sum?: TicketTypeSumOrderByAggregateInput;
  };

  export type TicketTypeScalarWhereWithAggregatesInput = {
    AND?:
      | TicketTypeScalarWhereWithAggregatesInput
      | TicketTypeScalarWhereWithAggregatesInput[];
    OR?: TicketTypeScalarWhereWithAggregatesInput[];
    NOT?:
      | TicketTypeScalarWhereWithAggregatesInput
      | TicketTypeScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"TicketType"> | string;
    eventId?: StringWithAggregatesFilter<"TicketType"> | string;
    name?: StringWithAggregatesFilter<"TicketType"> | string;
    description?:
      | StringNullableWithAggregatesFilter<"TicketType">
      | string
      | null;
    total?: IntWithAggregatesFilter<"TicketType"> | number;
    locked?: IntWithAggregatesFilter<"TicketType"> | number;
    booked?: IntWithAggregatesFilter<"TicketType"> | number;
    price?: FloatWithAggregatesFilter<"TicketType"> | number;
    createdAt?: DateTimeWithAggregatesFilter<"TicketType"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"TicketType"> | Date | string;
  };

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[];
    OR?: NotificationWhereInput[];
    NOT?: NotificationWhereInput | NotificationWhereInput[];
    id?: StringFilter<"Notification"> | string;
  };

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder;
  };

  export type NotificationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: NotificationWhereInput | NotificationWhereInput[];
      OR?: NotificationWhereInput[];
      NOT?: NotificationWhereInput | NotificationWhereInput[];
    },
    "id"
  >;

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder;
    _count?: NotificationCountOrderByAggregateInput;
    _max?: NotificationMaxOrderByAggregateInput;
    _min?: NotificationMinOrderByAggregateInput;
  };

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?:
      | NotificationScalarWhereWithAggregatesInput
      | NotificationScalarWhereWithAggregatesInput[];
    OR?: NotificationScalarWhereWithAggregatesInput[];
    NOT?:
      | NotificationScalarWhereWithAggregatesInput
      | NotificationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Notification"> | string;
  };

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[];
    OR?: BookingWhereInput[];
    NOT?: BookingWhereInput | BookingWhereInput[];
    id?: StringFilter<"Booking"> | string;
  };

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder;
  };

  export type BookingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: BookingWhereInput | BookingWhereInput[];
      OR?: BookingWhereInput[];
      NOT?: BookingWhereInput | BookingWhereInput[];
    },
    "id"
  >;

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder;
    _count?: BookingCountOrderByAggregateInput;
    _max?: BookingMaxOrderByAggregateInput;
    _min?: BookingMinOrderByAggregateInput;
  };

  export type BookingScalarWhereWithAggregatesInput = {
    AND?:
      | BookingScalarWhereWithAggregatesInput
      | BookingScalarWhereWithAggregatesInput[];
    OR?: BookingScalarWhereWithAggregatesInput[];
    NOT?:
      | BookingScalarWhereWithAggregatesInput
      | BookingScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Booking"> | string;
  };

  export type BookingItemWhereInput = {
    AND?: BookingItemWhereInput | BookingItemWhereInput[];
    OR?: BookingItemWhereInput[];
    NOT?: BookingItemWhereInput | BookingItemWhereInput[];
    id?: StringFilter<"BookingItem"> | string;
  };

  export type BookingItemOrderByWithRelationInput = {
    id?: SortOrder;
  };

  export type BookingItemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: BookingItemWhereInput | BookingItemWhereInput[];
      OR?: BookingItemWhereInput[];
      NOT?: BookingItemWhereInput | BookingItemWhereInput[];
    },
    "id"
  >;

  export type BookingItemOrderByWithAggregationInput = {
    id?: SortOrder;
    _count?: BookingItemCountOrderByAggregateInput;
    _max?: BookingItemMaxOrderByAggregateInput;
    _min?: BookingItemMinOrderByAggregateInput;
  };

  export type BookingItemScalarWhereWithAggregatesInput = {
    AND?:
      | BookingItemScalarWhereWithAggregatesInput
      | BookingItemScalarWhereWithAggregatesInput[];
    OR?: BookingItemScalarWhereWithAggregatesInput[];
    NOT?:
      | BookingItemScalarWhereWithAggregatesInput
      | BookingItemScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"BookingItem"> | string;
  };

  export type LockedTicketWhereInput = {
    AND?: LockedTicketWhereInput | LockedTicketWhereInput[];
    OR?: LockedTicketWhereInput[];
    NOT?: LockedTicketWhereInput | LockedTicketWhereInput[];
    id?: StringFilter<"LockedTicket"> | string;
  };

  export type LockedTicketOrderByWithRelationInput = {
    id?: SortOrder;
  };

  export type LockedTicketWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: LockedTicketWhereInput | LockedTicketWhereInput[];
      OR?: LockedTicketWhereInput[];
      NOT?: LockedTicketWhereInput | LockedTicketWhereInput[];
    },
    "id"
  >;

  export type LockedTicketOrderByWithAggregationInput = {
    id?: SortOrder;
    _count?: LockedTicketCountOrderByAggregateInput;
    _max?: LockedTicketMaxOrderByAggregateInput;
    _min?: LockedTicketMinOrderByAggregateInput;
  };

  export type LockedTicketScalarWhereWithAggregatesInput = {
    AND?:
      | LockedTicketScalarWhereWithAggregatesInput
      | LockedTicketScalarWhereWithAggregatesInput[];
    OR?: LockedTicketScalarWhereWithAggregatesInput[];
    NOT?:
      | LockedTicketScalarWhereWithAggregatesInput
      | LockedTicketScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"LockedTicket"> | string;
  };

  export type LockedItemWhereInput = {
    AND?: LockedItemWhereInput | LockedItemWhereInput[];
    OR?: LockedItemWhereInput[];
    NOT?: LockedItemWhereInput | LockedItemWhereInput[];
    id?: StringFilter<"LockedItem"> | string;
  };

  export type LockedItemOrderByWithRelationInput = {
    id?: SortOrder;
  };

  export type LockedItemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: LockedItemWhereInput | LockedItemWhereInput[];
      OR?: LockedItemWhereInput[];
      NOT?: LockedItemWhereInput | LockedItemWhereInput[];
    },
    "id"
  >;

  export type LockedItemOrderByWithAggregationInput = {
    id?: SortOrder;
    _count?: LockedItemCountOrderByAggregateInput;
    _max?: LockedItemMaxOrderByAggregateInput;
    _min?: LockedItemMinOrderByAggregateInput;
  };

  export type LockedItemScalarWhereWithAggregatesInput = {
    AND?:
      | LockedItemScalarWhereWithAggregatesInput
      | LockedItemScalarWhereWithAggregatesInput[];
    OR?: LockedItemScalarWhereWithAggregatesInput[];
    NOT?:
      | LockedItemScalarWhereWithAggregatesInput
      | LockedItemScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"LockedItem"> | string;
  };

  export type EventTicketCheckerWhereInput = {
    AND?: EventTicketCheckerWhereInput | EventTicketCheckerWhereInput[];
    OR?: EventTicketCheckerWhereInput[];
    NOT?: EventTicketCheckerWhereInput | EventTicketCheckerWhereInput[];
    id?: StringFilter<"EventTicketChecker"> | string;
  };

  export type EventTicketCheckerOrderByWithRelationInput = {
    id?: SortOrder;
  };

  export type EventTicketCheckerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: EventTicketCheckerWhereInput | EventTicketCheckerWhereInput[];
      OR?: EventTicketCheckerWhereInput[];
      NOT?: EventTicketCheckerWhereInput | EventTicketCheckerWhereInput[];
    },
    "id"
  >;

  export type EventTicketCheckerOrderByWithAggregationInput = {
    id?: SortOrder;
    _count?: EventTicketCheckerCountOrderByAggregateInput;
    _max?: EventTicketCheckerMaxOrderByAggregateInput;
    _min?: EventTicketCheckerMinOrderByAggregateInput;
  };

  export type EventTicketCheckerScalarWhereWithAggregatesInput = {
    AND?:
      | EventTicketCheckerScalarWhereWithAggregatesInput
      | EventTicketCheckerScalarWhereWithAggregatesInput[];
    OR?: EventTicketCheckerScalarWhereWithAggregatesInput[];
    NOT?:
      | EventTicketCheckerScalarWhereWithAggregatesInput
      | EventTicketCheckerScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"EventTicketChecker"> | string;
  };

  export type AccountCreateInput = {
    id?: string;
    email: string;
    firstName: string;
    password: string;
    lastName: string;
    refreshToken?: string | null;
    isVerified?: boolean;
    avatarUrl: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wallet: WalletCreateNestedOneWithoutAccountInput;
    user?: UserCreateNestedOneWithoutAccountInput;
    organizer?: OrganizerCreateNestedOneWithoutAccountInput;
  };

  export type AccountUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName: string;
    password: string;
    lastName: string;
    refreshToken?: string | null;
    isVerified?: boolean;
    avatarUrl: string;
    role: $Enums.Role;
    walletId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: UserUncheckedCreateNestedOneWithoutAccountInput;
    organizer?: OrganizerUncheckedCreateNestedOneWithoutAccountInput;
  };

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    avatarUrl?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    wallet?: WalletUpdateOneRequiredWithoutAccountNestedInput;
    user?: UserUpdateOneWithoutAccountNestedInput;
    organizer?: OrganizerUpdateOneWithoutAccountNestedInput;
  };

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    avatarUrl?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    walletId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUncheckedUpdateOneWithoutAccountNestedInput;
    organizer?: OrganizerUncheckedUpdateOneWithoutAccountNestedInput;
  };

  export type AccountCreateManyInput = {
    id?: string;
    email: string;
    firstName: string;
    password: string;
    lastName: string;
    refreshToken?: string | null;
    isVerified?: boolean;
    avatarUrl: string;
    role: $Enums.Role;
    walletId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    avatarUrl?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    avatarUrl?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    walletId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WalletCreateInput = {
    id?: string;
    totalBalance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    account?: AccountCreateNestedOneWithoutWalletInput;
    transactions?: TransactionCreateNestedManyWithoutWalletInput;
  };

  export type WalletUncheckedCreateInput = {
    id?: string;
    totalBalance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    account?: AccountUncheckedCreateNestedOneWithoutWalletInput;
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput;
  };

  export type WalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalBalance?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    account?: AccountUpdateOneWithoutWalletNestedInput;
    transactions?: TransactionUpdateManyWithoutWalletNestedInput;
  };

  export type WalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalBalance?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    account?: AccountUncheckedUpdateOneWithoutWalletNestedInput;
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput;
  };

  export type WalletCreateManyInput = {
    id?: string;
    totalBalance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type WalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalBalance?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalBalance?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TransactionCreateInput = {
    id?: string;
    amount: number;
    currency: $Enums.Currency;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    description?: string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wallet: WalletCreateNestedOneWithoutTransactionsInput;
  };

  export type TransactionUncheckedCreateInput = {
    id?: string;
    walletId: string;
    amount: number;
    currency: $Enums.Currency;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    description?: string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    wallet?: WalletUpdateOneRequiredWithoutTransactionsNestedInput;
  };

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    walletId?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TransactionCreateManyInput = {
    id?: string;
    walletId: string;
    amount: number;
    currency: $Enums.Currency;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    description?: string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    walletId?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    account: AccountCreateNestedOneWithoutUserInput;
    reviews?: ReviewCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    accountId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    account?: AccountUpdateOneRequiredWithoutUserNestedInput;
    reviews?: ReviewUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    accountId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationCreateInput = {
    id?: string;
    organizationName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: OrganizerCreateNestedManyWithoutOrganizationInput;
    events?: EventCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateInput = {
    id?: string;
    organizationName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: OrganizerUncheckedCreateNestedManyWithoutOrganizationInput;
    events?: EventUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: OrganizerUpdateManyWithoutOrganizationNestedInput;
    events?: EventUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: OrganizerUncheckedUpdateManyWithoutOrganizationNestedInput;
    events?: EventUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationCreateManyInput = {
    id?: string;
    organizationName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizerCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutMembersInput;
    account: AccountCreateNestedOneWithoutOrganizerInput;
  };

  export type OrganizerUncheckedCreateInput = {
    id?: string;
    accountId: string;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutMembersNestedInput;
    account?: AccountUpdateOneRequiredWithoutOrganizerNestedInput;
  };

  export type OrganizerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizerCreateManyInput = {
    id?: string;
    accountId: string;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventCreateInput = {
    id?: string;
    title: string;
    description: string;
    bannerUrl?: string | null;
    gallery?: EventCreategalleryInput | string[];
    location: string;
    venue: string;
    currency: $Enums.Currency;
    onDate: Date | string;
    timezone: string;
    duration: number;
    eventType: $Enums.EventType;
    eventStatus?: $Enums.EventStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutEventsInput;
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput;
    reviews?: ReviewCreateNestedManyWithoutEventInput;
  };

  export type EventUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    bannerUrl?: string | null;
    gallery?: EventCreategalleryInput | string[];
    location: string;
    venue: string;
    currency: $Enums.Currency;
    onDate: Date | string;
    timezone: string;
    duration: number;
    eventType: $Enums.EventType;
    eventStatus?: $Enums.EventStatus;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput;
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput;
  };

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    gallery?: EventUpdategalleryInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    venue?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    onDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    timezone?: StringFieldUpdateOperationsInput | string;
    duration?: FloatFieldUpdateOperationsInput | number;
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    eventStatus?:
      | EnumEventStatusFieldUpdateOperationsInput
      | $Enums.EventStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutEventsNestedInput;
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput;
    reviews?: ReviewUpdateManyWithoutEventNestedInput;
  };

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    gallery?: EventUpdategalleryInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    venue?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    onDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    timezone?: StringFieldUpdateOperationsInput | string;
    duration?: FloatFieldUpdateOperationsInput | number;
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    eventStatus?:
      | EnumEventStatusFieldUpdateOperationsInput
      | $Enums.EventStatus;
    organizationId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput;
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput;
  };

  export type EventCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    bannerUrl?: string | null;
    gallery?: EventCreategalleryInput | string[];
    location: string;
    venue: string;
    currency: $Enums.Currency;
    onDate: Date | string;
    timezone: string;
    duration: number;
    eventType: $Enums.EventType;
    eventStatus?: $Enums.EventStatus;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    gallery?: EventUpdategalleryInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    venue?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    onDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    timezone?: StringFieldUpdateOperationsInput | string;
    duration?: FloatFieldUpdateOperationsInput | number;
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    eventStatus?:
      | EnumEventStatusFieldUpdateOperationsInput
      | $Enums.EventStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    gallery?: EventUpdategalleryInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    venue?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    onDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    timezone?: StringFieldUpdateOperationsInput | string;
    duration?: FloatFieldUpdateOperationsInput | number;
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    eventStatus?:
      | EnumEventStatusFieldUpdateOperationsInput
      | $Enums.EventStatus;
    organizationId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewCreateInput = {
    id?: string;
    rating: number;
    message?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: EventCreateNestedOneWithoutReviewsInput;
    user: UserCreateNestedOneWithoutReviewsInput;
  };

  export type ReviewUncheckedCreateInput = {
    id?: string;
    rating: number;
    message?: string | null;
    eventId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    event?: EventUpdateOneRequiredWithoutReviewsNestedInput;
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput;
  };

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewCreateManyInput = {
    id?: string;
    rating: number;
    message?: string | null;
    eventId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TicketTypeCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    total: number;
    locked?: number;
    booked?: number;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: EventCreateNestedOneWithoutTicketTypesInput;
  };

  export type TicketTypeUncheckedCreateInput = {
    id?: string;
    eventId: string;
    name: string;
    description?: string | null;
    total: number;
    locked?: number;
    booked?: number;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TicketTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    total?: IntFieldUpdateOperationsInput | number;
    locked?: IntFieldUpdateOperationsInput | number;
    booked?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    event?: EventUpdateOneRequiredWithoutTicketTypesNestedInput;
  };

  export type TicketTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    eventId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    total?: IntFieldUpdateOperationsInput | number;
    locked?: IntFieldUpdateOperationsInput | number;
    booked?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TicketTypeCreateManyInput = {
    id?: string;
    eventId: string;
    name: string;
    description?: string | null;
    total: number;
    locked?: number;
    booked?: number;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TicketTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    total?: IntFieldUpdateOperationsInput | number;
    locked?: IntFieldUpdateOperationsInput | number;
    booked?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TicketTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    eventId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    total?: IntFieldUpdateOperationsInput | number;
    locked?: IntFieldUpdateOperationsInput | number;
    booked?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationCreateInput = {
    id?: string;
  };

  export type NotificationUncheckedCreateInput = {
    id?: string;
  };

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type NotificationCreateManyInput = {
    id?: string;
  };

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type BookingCreateInput = {
    id?: string;
  };

  export type BookingUncheckedCreateInput = {
    id?: string;
  };

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type BookingCreateManyInput = {
    id?: string;
  };

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type BookingItemCreateInput = {
    id?: string;
  };

  export type BookingItemUncheckedCreateInput = {
    id?: string;
  };

  export type BookingItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type BookingItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type BookingItemCreateManyInput = {
    id?: string;
  };

  export type BookingItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type BookingItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type LockedTicketCreateInput = {
    id?: string;
  };

  export type LockedTicketUncheckedCreateInput = {
    id?: string;
  };

  export type LockedTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type LockedTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type LockedTicketCreateManyInput = {
    id?: string;
  };

  export type LockedTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type LockedTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type LockedItemCreateInput = {
    id?: string;
  };

  export type LockedItemUncheckedCreateInput = {
    id?: string;
  };

  export type LockedItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type LockedItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type LockedItemCreateManyInput = {
    id?: string;
  };

  export type LockedItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type LockedItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type EventTicketCheckerCreateInput = {
    id?: string;
  };

  export type EventTicketCheckerUncheckedCreateInput = {
    id?: string;
  };

  export type EventTicketCheckerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type EventTicketCheckerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type EventTicketCheckerCreateManyInput = {
    id?: string;
  };

  export type EventTicketCheckerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type EventTicketCheckerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type WalletScalarRelationFilter = {
    is?: WalletWhereInput;
    isNot?: WalletWhereInput;
  };

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null;
    isNot?: UserWhereInput | null;
  };

  export type OrganizerNullableScalarRelationFilter = {
    is?: OrganizerWhereInput | null;
    isNot?: OrganizerWhereInput | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    password?: SortOrder;
    lastName?: SortOrder;
    refreshToken?: SortOrder;
    isVerified?: SortOrder;
    avatarUrl?: SortOrder;
    role?: SortOrder;
    walletId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    password?: SortOrder;
    lastName?: SortOrder;
    refreshToken?: SortOrder;
    isVerified?: SortOrder;
    avatarUrl?: SortOrder;
    role?: SortOrder;
    walletId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    password?: SortOrder;
    lastName?: SortOrder;
    refreshToken?: SortOrder;
    isVerified?: SortOrder;
    avatarUrl?: SortOrder;
    role?: SortOrder;
    walletId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null;
    isNot?: AccountWhereInput | null;
  };

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput;
    some?: TransactionWhereInput;
    none?: TransactionWhereInput;
  };

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder;
    totalBalance?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type WalletAvgOrderByAggregateInput = {
    totalBalance?: SortOrder;
  };

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder;
    totalBalance?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder;
    totalBalance?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type WalletSumOrderByAggregateInput = {
    totalBalance?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type EnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>;
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency;
  };

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TransactionType
      | EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionTypeFilter<$PrismaModel>
      | $Enums.TransactionType;
  };

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TransactionStatus
      | EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionStatus[]
      | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionStatus[]
      | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionStatusFilter<$PrismaModel>
      | $Enums.TransactionStatus;
  };
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, "path">
        >,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonNullableFilterBase<$PrismaModel>>, "path">
      >;

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder;
    walletId?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    description?: SortOrder;
    metadata?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder;
    walletId?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder;
    walletId?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type EnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>;
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCurrencyWithAggregatesFilter<$PrismaModel>
      | $Enums.Currency;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumCurrencyFilter<$PrismaModel>;
    _max?: NestedEnumCurrencyFilter<$PrismaModel>;
  };

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TransactionType
      | EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.TransactionType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>;
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>;
  };

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.TransactionStatus
        | EnumTransactionStatusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.TransactionStatus[]
        | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.TransactionStatus[]
        | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.TransactionStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumTransactionStatusFilter<$PrismaModel>;
      _max?: NestedEnumTransactionStatusFilter<$PrismaModel>;
    };
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          "path"
        >
      >;

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedJsonNullableFilter<$PrismaModel>;
    _max?: NestedJsonNullableFilter<$PrismaModel>;
  };

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput;
    isNot?: AccountWhereInput;
  };

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput;
    some?: ReviewWhereInput;
    none?: ReviewWhereInput;
  };

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    accountId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    accountId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    accountId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrganizerListRelationFilter = {
    every?: OrganizerWhereInput;
    some?: OrganizerWhereInput;
    none?: OrganizerWhereInput;
  };

  export type EventListRelationFilter = {
    every?: EventWhereInput;
    some?: EventWhereInput;
    none?: EventWhereInput;
  };

  export type OrganizerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder;
    organizationName?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    organizationName?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder;
    organizationName?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput;
    isNot?: OrganizationWhereInput;
  };

  export type OrganizerCountOrderByAggregateInput = {
    id?: SortOrder;
    accountId?: SortOrder;
    organizationId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrganizerMaxOrderByAggregateInput = {
    id?: SortOrder;
    accountId?: SortOrder;
    organizationId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrganizerMinOrderByAggregateInput = {
    id?: SortOrder;
    accountId?: SortOrder;
    organizationId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType;
  };

  export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EventStatus[]
      | ListEnumEventStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus;
  };

  export type TicketTypeListRelationFilter = {
    every?: TicketTypeWhereInput;
    some?: TicketTypeWhereInput;
    none?: TicketTypeWhereInput;
  };

  export type TicketTypeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    bannerUrl?: SortOrder;
    gallery?: SortOrder;
    location?: SortOrder;
    venue?: SortOrder;
    currency?: SortOrder;
    onDate?: SortOrder;
    timezone?: SortOrder;
    duration?: SortOrder;
    eventType?: SortOrder;
    eventStatus?: SortOrder;
    organizationId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EventAvgOrderByAggregateInput = {
    duration?: SortOrder;
  };

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    bannerUrl?: SortOrder;
    location?: SortOrder;
    venue?: SortOrder;
    currency?: SortOrder;
    onDate?: SortOrder;
    timezone?: SortOrder;
    duration?: SortOrder;
    eventType?: SortOrder;
    eventStatus?: SortOrder;
    organizationId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    bannerUrl?: SortOrder;
    location?: SortOrder;
    venue?: SortOrder;
    currency?: SortOrder;
    onDate?: SortOrder;
    timezone?: SortOrder;
    duration?: SortOrder;
    eventType?: SortOrder;
    eventStatus?: SortOrder;
    organizationId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EventSumOrderByAggregateInput = {
    duration?: SortOrder;
  };

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEventTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.EventType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEventTypeFilter<$PrismaModel>;
    _max?: NestedEnumEventTypeFilter<$PrismaModel>;
  };

  export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EventStatus[]
      | ListEnumEventStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEventStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.EventStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEventStatusFilter<$PrismaModel>;
    _max?: NestedEnumEventStatusFilter<$PrismaModel>;
  };

  export type EventScalarRelationFilter = {
    is?: EventWhereInput;
    isNot?: EventWhereInput;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type ReviewUserIdEventIdCompoundUniqueInput = {
    userId: string;
    eventId: string;
  };

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    message?: SortOrder;
    eventId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    message?: SortOrder;
    eventId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    message?: SortOrder;
    eventId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type TicketTypeCountOrderByAggregateInput = {
    id?: SortOrder;
    eventId?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    total?: SortOrder;
    locked?: SortOrder;
    booked?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TicketTypeAvgOrderByAggregateInput = {
    total?: SortOrder;
    locked?: SortOrder;
    booked?: SortOrder;
    price?: SortOrder;
  };

  export type TicketTypeMaxOrderByAggregateInput = {
    id?: SortOrder;
    eventId?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    total?: SortOrder;
    locked?: SortOrder;
    booked?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TicketTypeMinOrderByAggregateInput = {
    id?: SortOrder;
    eventId?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    total?: SortOrder;
    locked?: SortOrder;
    booked?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TicketTypeSumOrderByAggregateInput = {
    total?: SortOrder;
    locked?: SortOrder;
    booked?: SortOrder;
    price?: SortOrder;
  };

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type BookingItemCountOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type BookingItemMaxOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type BookingItemMinOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type LockedTicketCountOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type LockedTicketMaxOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type LockedTicketMinOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type LockedItemCountOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type LockedItemMaxOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type LockedItemMinOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type EventTicketCheckerCountOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type EventTicketCheckerMaxOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type EventTicketCheckerMinOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type WalletCreateNestedOneWithoutAccountInput = {
    create?: XOR<
      WalletCreateWithoutAccountInput,
      WalletUncheckedCreateWithoutAccountInput
    >;
    connectOrCreate?: WalletCreateOrConnectWithoutAccountInput;
    connect?: WalletWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutAccountInput = {
    create?: XOR<
      UserCreateWithoutAccountInput,
      UserUncheckedCreateWithoutAccountInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput;
    connect?: UserWhereUniqueInput;
  };

  export type OrganizerCreateNestedOneWithoutAccountInput = {
    create?: XOR<
      OrganizerCreateWithoutAccountInput,
      OrganizerUncheckedCreateWithoutAccountInput
    >;
    connectOrCreate?: OrganizerCreateOrConnectWithoutAccountInput;
    connect?: OrganizerWhereUniqueInput;
  };

  export type UserUncheckedCreateNestedOneWithoutAccountInput = {
    create?: XOR<
      UserCreateWithoutAccountInput,
      UserUncheckedCreateWithoutAccountInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput;
    connect?: UserWhereUniqueInput;
  };

  export type OrganizerUncheckedCreateNestedOneWithoutAccountInput = {
    create?: XOR<
      OrganizerCreateWithoutAccountInput,
      OrganizerUncheckedCreateWithoutAccountInput
    >;
    connectOrCreate?: OrganizerCreateOrConnectWithoutAccountInput;
    connect?: OrganizerWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type WalletUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<
      WalletCreateWithoutAccountInput,
      WalletUncheckedCreateWithoutAccountInput
    >;
    connectOrCreate?: WalletCreateOrConnectWithoutAccountInput;
    upsert?: WalletUpsertWithoutAccountInput;
    connect?: WalletWhereUniqueInput;
    update?: XOR<
      XOR<
        WalletUpdateToOneWithWhereWithoutAccountInput,
        WalletUpdateWithoutAccountInput
      >,
      WalletUncheckedUpdateWithoutAccountInput
    >;
  };

  export type UserUpdateOneWithoutAccountNestedInput = {
    create?: XOR<
      UserCreateWithoutAccountInput,
      UserUncheckedCreateWithoutAccountInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput;
    upsert?: UserUpsertWithoutAccountInput;
    disconnect?: UserWhereInput | boolean;
    delete?: UserWhereInput | boolean;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutAccountInput,
        UserUpdateWithoutAccountInput
      >,
      UserUncheckedUpdateWithoutAccountInput
    >;
  };

  export type OrganizerUpdateOneWithoutAccountNestedInput = {
    create?: XOR<
      OrganizerCreateWithoutAccountInput,
      OrganizerUncheckedCreateWithoutAccountInput
    >;
    connectOrCreate?: OrganizerCreateOrConnectWithoutAccountInput;
    upsert?: OrganizerUpsertWithoutAccountInput;
    disconnect?: OrganizerWhereInput | boolean;
    delete?: OrganizerWhereInput | boolean;
    connect?: OrganizerWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizerUpdateToOneWithWhereWithoutAccountInput,
        OrganizerUpdateWithoutAccountInput
      >,
      OrganizerUncheckedUpdateWithoutAccountInput
    >;
  };

  export type UserUncheckedUpdateOneWithoutAccountNestedInput = {
    create?: XOR<
      UserCreateWithoutAccountInput,
      UserUncheckedCreateWithoutAccountInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput;
    upsert?: UserUpsertWithoutAccountInput;
    disconnect?: UserWhereInput | boolean;
    delete?: UserWhereInput | boolean;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutAccountInput,
        UserUpdateWithoutAccountInput
      >,
      UserUncheckedUpdateWithoutAccountInput
    >;
  };

  export type OrganizerUncheckedUpdateOneWithoutAccountNestedInput = {
    create?: XOR<
      OrganizerCreateWithoutAccountInput,
      OrganizerUncheckedCreateWithoutAccountInput
    >;
    connectOrCreate?: OrganizerCreateOrConnectWithoutAccountInput;
    upsert?: OrganizerUpsertWithoutAccountInput;
    disconnect?: OrganizerWhereInput | boolean;
    delete?: OrganizerWhereInput | boolean;
    connect?: OrganizerWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizerUpdateToOneWithWhereWithoutAccountInput,
        OrganizerUpdateWithoutAccountInput
      >,
      OrganizerUncheckedUpdateWithoutAccountInput
    >;
  };

  export type AccountCreateNestedOneWithoutWalletInput = {
    create?: XOR<
      AccountCreateWithoutWalletInput,
      AccountUncheckedCreateWithoutWalletInput
    >;
    connectOrCreate?: AccountCreateOrConnectWithoutWalletInput;
    connect?: AccountWhereUniqueInput;
  };

  export type TransactionCreateNestedManyWithoutWalletInput = {
    create?:
      | XOR<
          TransactionCreateWithoutWalletInput,
          TransactionUncheckedCreateWithoutWalletInput
        >
      | TransactionCreateWithoutWalletInput[]
      | TransactionUncheckedCreateWithoutWalletInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutWalletInput
      | TransactionCreateOrConnectWithoutWalletInput[];
    createMany?: TransactionCreateManyWalletInputEnvelope;
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
  };

  export type AccountUncheckedCreateNestedOneWithoutWalletInput = {
    create?: XOR<
      AccountCreateWithoutWalletInput,
      AccountUncheckedCreateWithoutWalletInput
    >;
    connectOrCreate?: AccountCreateOrConnectWithoutWalletInput;
    connect?: AccountWhereUniqueInput;
  };

  export type TransactionUncheckedCreateNestedManyWithoutWalletInput = {
    create?:
      | XOR<
          TransactionCreateWithoutWalletInput,
          TransactionUncheckedCreateWithoutWalletInput
        >
      | TransactionCreateWithoutWalletInput[]
      | TransactionUncheckedCreateWithoutWalletInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutWalletInput
      | TransactionCreateOrConnectWithoutWalletInput[];
    createMany?: TransactionCreateManyWalletInputEnvelope;
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type AccountUpdateOneWithoutWalletNestedInput = {
    create?: XOR<
      AccountCreateWithoutWalletInput,
      AccountUncheckedCreateWithoutWalletInput
    >;
    connectOrCreate?: AccountCreateOrConnectWithoutWalletInput;
    upsert?: AccountUpsertWithoutWalletInput;
    disconnect?: AccountWhereInput | boolean;
    delete?: AccountWhereInput | boolean;
    connect?: AccountWhereUniqueInput;
    update?: XOR<
      XOR<
        AccountUpdateToOneWithWhereWithoutWalletInput,
        AccountUpdateWithoutWalletInput
      >,
      AccountUncheckedUpdateWithoutWalletInput
    >;
  };

  export type TransactionUpdateManyWithoutWalletNestedInput = {
    create?:
      | XOR<
          TransactionCreateWithoutWalletInput,
          TransactionUncheckedCreateWithoutWalletInput
        >
      | TransactionCreateWithoutWalletInput[]
      | TransactionUncheckedCreateWithoutWalletInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutWalletInput
      | TransactionCreateOrConnectWithoutWalletInput[];
    upsert?:
      | TransactionUpsertWithWhereUniqueWithoutWalletInput
      | TransactionUpsertWithWhereUniqueWithoutWalletInput[];
    createMany?: TransactionCreateManyWalletInputEnvelope;
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    update?:
      | TransactionUpdateWithWhereUniqueWithoutWalletInput
      | TransactionUpdateWithWhereUniqueWithoutWalletInput[];
    updateMany?:
      | TransactionUpdateManyWithWhereWithoutWalletInput
      | TransactionUpdateManyWithWhereWithoutWalletInput[];
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
  };

  export type AccountUncheckedUpdateOneWithoutWalletNestedInput = {
    create?: XOR<
      AccountCreateWithoutWalletInput,
      AccountUncheckedCreateWithoutWalletInput
    >;
    connectOrCreate?: AccountCreateOrConnectWithoutWalletInput;
    upsert?: AccountUpsertWithoutWalletInput;
    disconnect?: AccountWhereInput | boolean;
    delete?: AccountWhereInput | boolean;
    connect?: AccountWhereUniqueInput;
    update?: XOR<
      XOR<
        AccountUpdateToOneWithWhereWithoutWalletInput,
        AccountUpdateWithoutWalletInput
      >,
      AccountUncheckedUpdateWithoutWalletInput
    >;
  };

  export type TransactionUncheckedUpdateManyWithoutWalletNestedInput = {
    create?:
      | XOR<
          TransactionCreateWithoutWalletInput,
          TransactionUncheckedCreateWithoutWalletInput
        >
      | TransactionCreateWithoutWalletInput[]
      | TransactionUncheckedCreateWithoutWalletInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutWalletInput
      | TransactionCreateOrConnectWithoutWalletInput[];
    upsert?:
      | TransactionUpsertWithWhereUniqueWithoutWalletInput
      | TransactionUpsertWithWhereUniqueWithoutWalletInput[];
    createMany?: TransactionCreateManyWalletInputEnvelope;
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    update?:
      | TransactionUpdateWithWhereUniqueWithoutWalletInput
      | TransactionUpdateWithWhereUniqueWithoutWalletInput[];
    updateMany?:
      | TransactionUpdateManyWithWhereWithoutWalletInput
      | TransactionUpdateManyWithWhereWithoutWalletInput[];
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
  };

  export type WalletCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<
      WalletCreateWithoutTransactionsInput,
      WalletUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: WalletCreateOrConnectWithoutTransactionsInput;
    connect?: WalletWhereUniqueInput;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type EnumCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.Currency;
  };

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType;
  };

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus;
  };

  export type WalletUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<
      WalletCreateWithoutTransactionsInput,
      WalletUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: WalletCreateOrConnectWithoutTransactionsInput;
    upsert?: WalletUpsertWithoutTransactionsInput;
    connect?: WalletWhereUniqueInput;
    update?: XOR<
      XOR<
        WalletUpdateToOneWithWhereWithoutTransactionsInput,
        WalletUpdateWithoutTransactionsInput
      >,
      WalletUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type AccountCreateNestedOneWithoutUserInput = {
    create?: XOR<
      AccountCreateWithoutUserInput,
      AccountUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput;
    connect?: AccountWhereUniqueInput;
  };

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
      | ReviewCreateWithoutUserInput[]
      | ReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutUserInput
      | ReviewCreateOrConnectWithoutUserInput[];
    createMany?: ReviewCreateManyUserInputEnvelope;
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
  };

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
      | ReviewCreateWithoutUserInput[]
      | ReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutUserInput
      | ReviewCreateOrConnectWithoutUserInput[];
    createMany?: ReviewCreateManyUserInputEnvelope;
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
  };

  export type AccountUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<
      AccountCreateWithoutUserInput,
      AccountUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput;
    upsert?: AccountUpsertWithoutUserInput;
    connect?: AccountWhereUniqueInput;
    update?: XOR<
      XOR<
        AccountUpdateToOneWithWhereWithoutUserInput,
        AccountUpdateWithoutUserInput
      >,
      AccountUncheckedUpdateWithoutUserInput
    >;
  };

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
      | ReviewCreateWithoutUserInput[]
      | ReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutUserInput
      | ReviewCreateOrConnectWithoutUserInput[];
    upsert?:
      | ReviewUpsertWithWhereUniqueWithoutUserInput
      | ReviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ReviewCreateManyUserInputEnvelope;
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    update?:
      | ReviewUpdateWithWhereUniqueWithoutUserInput
      | ReviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ReviewUpdateManyWithWhereWithoutUserInput
      | ReviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
  };

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
      | ReviewCreateWithoutUserInput[]
      | ReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutUserInput
      | ReviewCreateOrConnectWithoutUserInput[];
    upsert?:
      | ReviewUpsertWithWhereUniqueWithoutUserInput
      | ReviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ReviewCreateManyUserInputEnvelope;
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    update?:
      | ReviewUpdateWithWhereUniqueWithoutUserInput
      | ReviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ReviewUpdateManyWithWhereWithoutUserInput
      | ReviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
  };

  export type OrganizerCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          OrganizerCreateWithoutOrganizationInput,
          OrganizerUncheckedCreateWithoutOrganizationInput
        >
      | OrganizerCreateWithoutOrganizationInput[]
      | OrganizerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | OrganizerCreateOrConnectWithoutOrganizationInput
      | OrganizerCreateOrConnectWithoutOrganizationInput[];
    createMany?: OrganizerCreateManyOrganizationInputEnvelope;
    connect?: OrganizerWhereUniqueInput | OrganizerWhereUniqueInput[];
  };

  export type EventCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          EventCreateWithoutOrganizationInput,
          EventUncheckedCreateWithoutOrganizationInput
        >
      | EventCreateWithoutOrganizationInput[]
      | EventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutOrganizationInput
      | EventCreateOrConnectWithoutOrganizationInput[];
    createMany?: EventCreateManyOrganizationInputEnvelope;
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
  };

  export type OrganizerUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          OrganizerCreateWithoutOrganizationInput,
          OrganizerUncheckedCreateWithoutOrganizationInput
        >
      | OrganizerCreateWithoutOrganizationInput[]
      | OrganizerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | OrganizerCreateOrConnectWithoutOrganizationInput
      | OrganizerCreateOrConnectWithoutOrganizationInput[];
    createMany?: OrganizerCreateManyOrganizationInputEnvelope;
    connect?: OrganizerWhereUniqueInput | OrganizerWhereUniqueInput[];
  };

  export type EventUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          EventCreateWithoutOrganizationInput,
          EventUncheckedCreateWithoutOrganizationInput
        >
      | EventCreateWithoutOrganizationInput[]
      | EventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutOrganizationInput
      | EventCreateOrConnectWithoutOrganizationInput[];
    createMany?: EventCreateManyOrganizationInputEnvelope;
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
  };

  export type OrganizerUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          OrganizerCreateWithoutOrganizationInput,
          OrganizerUncheckedCreateWithoutOrganizationInput
        >
      | OrganizerCreateWithoutOrganizationInput[]
      | OrganizerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | OrganizerCreateOrConnectWithoutOrganizationInput
      | OrganizerCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | OrganizerUpsertWithWhereUniqueWithoutOrganizationInput
      | OrganizerUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: OrganizerCreateManyOrganizationInputEnvelope;
    set?: OrganizerWhereUniqueInput | OrganizerWhereUniqueInput[];
    disconnect?: OrganizerWhereUniqueInput | OrganizerWhereUniqueInput[];
    delete?: OrganizerWhereUniqueInput | OrganizerWhereUniqueInput[];
    connect?: OrganizerWhereUniqueInput | OrganizerWhereUniqueInput[];
    update?:
      | OrganizerUpdateWithWhereUniqueWithoutOrganizationInput
      | OrganizerUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | OrganizerUpdateManyWithWhereWithoutOrganizationInput
      | OrganizerUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: OrganizerScalarWhereInput | OrganizerScalarWhereInput[];
  };

  export type EventUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          EventCreateWithoutOrganizationInput,
          EventUncheckedCreateWithoutOrganizationInput
        >
      | EventCreateWithoutOrganizationInput[]
      | EventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutOrganizationInput
      | EventCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | EventUpsertWithWhereUniqueWithoutOrganizationInput
      | EventUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: EventCreateManyOrganizationInputEnvelope;
    set?: EventWhereUniqueInput | EventWhereUniqueInput[];
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[];
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    update?:
      | EventUpdateWithWhereUniqueWithoutOrganizationInput
      | EventUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | EventUpdateManyWithWhereWithoutOrganizationInput
      | EventUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[];
  };

  export type OrganizerUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          OrganizerCreateWithoutOrganizationInput,
          OrganizerUncheckedCreateWithoutOrganizationInput
        >
      | OrganizerCreateWithoutOrganizationInput[]
      | OrganizerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | OrganizerCreateOrConnectWithoutOrganizationInput
      | OrganizerCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | OrganizerUpsertWithWhereUniqueWithoutOrganizationInput
      | OrganizerUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: OrganizerCreateManyOrganizationInputEnvelope;
    set?: OrganizerWhereUniqueInput | OrganizerWhereUniqueInput[];
    disconnect?: OrganizerWhereUniqueInput | OrganizerWhereUniqueInput[];
    delete?: OrganizerWhereUniqueInput | OrganizerWhereUniqueInput[];
    connect?: OrganizerWhereUniqueInput | OrganizerWhereUniqueInput[];
    update?:
      | OrganizerUpdateWithWhereUniqueWithoutOrganizationInput
      | OrganizerUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | OrganizerUpdateManyWithWhereWithoutOrganizationInput
      | OrganizerUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: OrganizerScalarWhereInput | OrganizerScalarWhereInput[];
  };

  export type EventUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          EventCreateWithoutOrganizationInput,
          EventUncheckedCreateWithoutOrganizationInput
        >
      | EventCreateWithoutOrganizationInput[]
      | EventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutOrganizationInput
      | EventCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | EventUpsertWithWhereUniqueWithoutOrganizationInput
      | EventUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: EventCreateManyOrganizationInputEnvelope;
    set?: EventWhereUniqueInput | EventWhereUniqueInput[];
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[];
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    update?:
      | EventUpdateWithWhereUniqueWithoutOrganizationInput
      | EventUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | EventUpdateManyWithWhereWithoutOrganizationInput
      | EventUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[];
  };

  export type OrganizationCreateNestedOneWithoutMembersInput = {
    create?: XOR<
      OrganizationCreateWithoutMembersInput,
      OrganizationUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type AccountCreateNestedOneWithoutOrganizerInput = {
    create?: XOR<
      AccountCreateWithoutOrganizerInput,
      AccountUncheckedCreateWithoutOrganizerInput
    >;
    connectOrCreate?: AccountCreateOrConnectWithoutOrganizerInput;
    connect?: AccountWhereUniqueInput;
  };

  export type OrganizationUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutMembersInput,
      OrganizationUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput;
    upsert?: OrganizationUpsertWithoutMembersInput;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutMembersInput,
        OrganizationUpdateWithoutMembersInput
      >,
      OrganizationUncheckedUpdateWithoutMembersInput
    >;
  };

  export type AccountUpdateOneRequiredWithoutOrganizerNestedInput = {
    create?: XOR<
      AccountCreateWithoutOrganizerInput,
      AccountUncheckedCreateWithoutOrganizerInput
    >;
    connectOrCreate?: AccountCreateOrConnectWithoutOrganizerInput;
    upsert?: AccountUpsertWithoutOrganizerInput;
    connect?: AccountWhereUniqueInput;
    update?: XOR<
      XOR<
        AccountUpdateToOneWithWhereWithoutOrganizerInput,
        AccountUpdateWithoutOrganizerInput
      >,
      AccountUncheckedUpdateWithoutOrganizerInput
    >;
  };

  export type EventCreategalleryInput = {
    set: string[];
  };

  export type OrganizationCreateNestedOneWithoutEventsInput = {
    create?: XOR<
      OrganizationCreateWithoutEventsInput,
      OrganizationUncheckedCreateWithoutEventsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutEventsInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type TicketTypeCreateNestedManyWithoutEventInput = {
    create?:
      | XOR<
          TicketTypeCreateWithoutEventInput,
          TicketTypeUncheckedCreateWithoutEventInput
        >
      | TicketTypeCreateWithoutEventInput[]
      | TicketTypeUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | TicketTypeCreateOrConnectWithoutEventInput
      | TicketTypeCreateOrConnectWithoutEventInput[];
    createMany?: TicketTypeCreateManyEventInputEnvelope;
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[];
  };

  export type ReviewCreateNestedManyWithoutEventInput = {
    create?:
      | XOR<
          ReviewCreateWithoutEventInput,
          ReviewUncheckedCreateWithoutEventInput
        >
      | ReviewCreateWithoutEventInput[]
      | ReviewUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutEventInput
      | ReviewCreateOrConnectWithoutEventInput[];
    createMany?: ReviewCreateManyEventInputEnvelope;
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
  };

  export type TicketTypeUncheckedCreateNestedManyWithoutEventInput = {
    create?:
      | XOR<
          TicketTypeCreateWithoutEventInput,
          TicketTypeUncheckedCreateWithoutEventInput
        >
      | TicketTypeCreateWithoutEventInput[]
      | TicketTypeUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | TicketTypeCreateOrConnectWithoutEventInput
      | TicketTypeCreateOrConnectWithoutEventInput[];
    createMany?: TicketTypeCreateManyEventInputEnvelope;
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[];
  };

  export type ReviewUncheckedCreateNestedManyWithoutEventInput = {
    create?:
      | XOR<
          ReviewCreateWithoutEventInput,
          ReviewUncheckedCreateWithoutEventInput
        >
      | ReviewCreateWithoutEventInput[]
      | ReviewUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutEventInput
      | ReviewCreateOrConnectWithoutEventInput[];
    createMany?: ReviewCreateManyEventInputEnvelope;
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
  };

  export type EventUpdategalleryInput = {
    set?: string[];
    push?: string | string[];
  };

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType;
  };

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus;
  };

  export type OrganizationUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutEventsInput,
      OrganizationUncheckedCreateWithoutEventsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutEventsInput;
    upsert?: OrganizationUpsertWithoutEventsInput;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutEventsInput,
        OrganizationUpdateWithoutEventsInput
      >,
      OrganizationUncheckedUpdateWithoutEventsInput
    >;
  };

  export type TicketTypeUpdateManyWithoutEventNestedInput = {
    create?:
      | XOR<
          TicketTypeCreateWithoutEventInput,
          TicketTypeUncheckedCreateWithoutEventInput
        >
      | TicketTypeCreateWithoutEventInput[]
      | TicketTypeUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | TicketTypeCreateOrConnectWithoutEventInput
      | TicketTypeCreateOrConnectWithoutEventInput[];
    upsert?:
      | TicketTypeUpsertWithWhereUniqueWithoutEventInput
      | TicketTypeUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: TicketTypeCreateManyEventInputEnvelope;
    set?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[];
    disconnect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[];
    delete?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[];
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[];
    update?:
      | TicketTypeUpdateWithWhereUniqueWithoutEventInput
      | TicketTypeUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?:
      | TicketTypeUpdateManyWithWhereWithoutEventInput
      | TicketTypeUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[];
  };

  export type ReviewUpdateManyWithoutEventNestedInput = {
    create?:
      | XOR<
          ReviewCreateWithoutEventInput,
          ReviewUncheckedCreateWithoutEventInput
        >
      | ReviewCreateWithoutEventInput[]
      | ReviewUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutEventInput
      | ReviewCreateOrConnectWithoutEventInput[];
    upsert?:
      | ReviewUpsertWithWhereUniqueWithoutEventInput
      | ReviewUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: ReviewCreateManyEventInputEnvelope;
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    update?:
      | ReviewUpdateWithWhereUniqueWithoutEventInput
      | ReviewUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?:
      | ReviewUpdateManyWithWhereWithoutEventInput
      | ReviewUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
  };

  export type TicketTypeUncheckedUpdateManyWithoutEventNestedInput = {
    create?:
      | XOR<
          TicketTypeCreateWithoutEventInput,
          TicketTypeUncheckedCreateWithoutEventInput
        >
      | TicketTypeCreateWithoutEventInput[]
      | TicketTypeUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | TicketTypeCreateOrConnectWithoutEventInput
      | TicketTypeCreateOrConnectWithoutEventInput[];
    upsert?:
      | TicketTypeUpsertWithWhereUniqueWithoutEventInput
      | TicketTypeUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: TicketTypeCreateManyEventInputEnvelope;
    set?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[];
    disconnect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[];
    delete?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[];
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[];
    update?:
      | TicketTypeUpdateWithWhereUniqueWithoutEventInput
      | TicketTypeUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?:
      | TicketTypeUpdateManyWithWhereWithoutEventInput
      | TicketTypeUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[];
  };

  export type ReviewUncheckedUpdateManyWithoutEventNestedInput = {
    create?:
      | XOR<
          ReviewCreateWithoutEventInput,
          ReviewUncheckedCreateWithoutEventInput
        >
      | ReviewCreateWithoutEventInput[]
      | ReviewUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutEventInput
      | ReviewCreateOrConnectWithoutEventInput[];
    upsert?:
      | ReviewUpsertWithWhereUniqueWithoutEventInput
      | ReviewUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: ReviewCreateManyEventInputEnvelope;
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    update?:
      | ReviewUpdateWithWhereUniqueWithoutEventInput
      | ReviewUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?:
      | ReviewUpdateManyWithWhereWithoutEventInput
      | ReviewUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
  };

  export type EventCreateNestedOneWithoutReviewsInput = {
    create?: XOR<
      EventCreateWithoutReviewsInput,
      EventUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutReviewsInput;
    connect?: EventWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<
      UserCreateWithoutReviewsInput,
      UserUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput;
    connect?: UserWhereUniqueInput;
  };

  export type EventUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<
      EventCreateWithoutReviewsInput,
      EventUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutReviewsInput;
    upsert?: EventUpsertWithoutReviewsInput;
    connect?: EventWhereUniqueInput;
    update?: XOR<
      XOR<
        EventUpdateToOneWithWhereWithoutReviewsInput,
        EventUpdateWithoutReviewsInput
      >,
      EventUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<
      UserCreateWithoutReviewsInput,
      UserUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput;
    upsert?: UserUpsertWithoutReviewsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutReviewsInput,
        UserUpdateWithoutReviewsInput
      >,
      UserUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type EventCreateNestedOneWithoutTicketTypesInput = {
    create?: XOR<
      EventCreateWithoutTicketTypesInput,
      EventUncheckedCreateWithoutTicketTypesInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutTicketTypesInput;
    connect?: EventWhereUniqueInput;
  };

  export type EventUpdateOneRequiredWithoutTicketTypesNestedInput = {
    create?: XOR<
      EventCreateWithoutTicketTypesInput,
      EventUncheckedCreateWithoutTicketTypesInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutTicketTypesInput;
    upsert?: EventUpsertWithoutTicketTypesInput;
    connect?: EventWhereUniqueInput;
    update?: XOR<
      XOR<
        EventUpdateToOneWithWhereWithoutTicketTypesInput,
        EventUpdateWithoutTicketTypesInput
      >,
      EventUncheckedUpdateWithoutTicketTypesInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedEnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>;
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency;
  };

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TransactionType
      | EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionTypeFilter<$PrismaModel>
      | $Enums.TransactionType;
  };

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TransactionStatus
      | EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionStatus[]
      | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionStatus[]
      | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionStatusFilter<$PrismaModel>
      | $Enums.TransactionStatus;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedEnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>;
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCurrencyWithAggregatesFilter<$PrismaModel>
      | $Enums.Currency;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumCurrencyFilter<$PrismaModel>;
    _max?: NestedEnumCurrencyFilter<$PrismaModel>;
  };

  export type NestedEnumTransactionTypeWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.TransactionType
      | EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.TransactionType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>;
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>;
  };

  export type NestedEnumTransactionStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.TransactionStatus
      | EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionStatus[]
      | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionStatus[]
      | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.TransactionStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>;
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>;
  };
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonNullableFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, "path">
      >;

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType;
  };

  export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EventStatus[]
      | ListEnumEventStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus;
  };

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEventTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.EventType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEventTypeFilter<$PrismaModel>;
    _max?: NestedEnumEventTypeFilter<$PrismaModel>;
  };

  export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.EventStatus[]
        | ListEnumEventStatusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.EventStatus[]
        | ListEnumEventStatusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumEventStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.EventStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumEventStatusFilter<$PrismaModel>;
      _max?: NestedEnumEventStatusFilter<$PrismaModel>;
    };

  export type WalletCreateWithoutAccountInput = {
    id?: string;
    totalBalance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: TransactionCreateNestedManyWithoutWalletInput;
  };

  export type WalletUncheckedCreateWithoutAccountInput = {
    id?: string;
    totalBalance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput;
  };

  export type WalletCreateOrConnectWithoutAccountInput = {
    where: WalletWhereUniqueInput;
    create: XOR<
      WalletCreateWithoutAccountInput,
      WalletUncheckedCreateWithoutAccountInput
    >;
  };

  export type UserCreateWithoutAccountInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: ReviewCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutAccountInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutAccountInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutAccountInput,
      UserUncheckedCreateWithoutAccountInput
    >;
  };

  export type OrganizerCreateWithoutAccountInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutMembersInput;
  };

  export type OrganizerUncheckedCreateWithoutAccountInput = {
    id?: string;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizerCreateOrConnectWithoutAccountInput = {
    where: OrganizerWhereUniqueInput;
    create: XOR<
      OrganizerCreateWithoutAccountInput,
      OrganizerUncheckedCreateWithoutAccountInput
    >;
  };

  export type WalletUpsertWithoutAccountInput = {
    update: XOR<
      WalletUpdateWithoutAccountInput,
      WalletUncheckedUpdateWithoutAccountInput
    >;
    create: XOR<
      WalletCreateWithoutAccountInput,
      WalletUncheckedCreateWithoutAccountInput
    >;
    where?: WalletWhereInput;
  };

  export type WalletUpdateToOneWithWhereWithoutAccountInput = {
    where?: WalletWhereInput;
    data: XOR<
      WalletUpdateWithoutAccountInput,
      WalletUncheckedUpdateWithoutAccountInput
    >;
  };

  export type WalletUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalBalance?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: TransactionUpdateManyWithoutWalletNestedInput;
  };

  export type WalletUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalBalance?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput;
  };

  export type UserUpsertWithoutAccountInput = {
    update: XOR<
      UserUpdateWithoutAccountInput,
      UserUncheckedUpdateWithoutAccountInput
    >;
    create: XOR<
      UserCreateWithoutAccountInput,
      UserUncheckedCreateWithoutAccountInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutAccountInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutAccountInput,
      UserUncheckedUpdateWithoutAccountInput
    >;
  };

  export type UserUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: ReviewUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type OrganizerUpsertWithoutAccountInput = {
    update: XOR<
      OrganizerUpdateWithoutAccountInput,
      OrganizerUncheckedUpdateWithoutAccountInput
    >;
    create: XOR<
      OrganizerCreateWithoutAccountInput,
      OrganizerUncheckedCreateWithoutAccountInput
    >;
    where?: OrganizerWhereInput;
  };

  export type OrganizerUpdateToOneWithWhereWithoutAccountInput = {
    where?: OrganizerWhereInput;
    data: XOR<
      OrganizerUpdateWithoutAccountInput,
      OrganizerUncheckedUpdateWithoutAccountInput
    >;
  };

  export type OrganizerUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutMembersNestedInput;
  };

  export type OrganizerUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountCreateWithoutWalletInput = {
    id?: string;
    email: string;
    firstName: string;
    password: string;
    lastName: string;
    refreshToken?: string | null;
    isVerified?: boolean;
    avatarUrl: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: UserCreateNestedOneWithoutAccountInput;
    organizer?: OrganizerCreateNestedOneWithoutAccountInput;
  };

  export type AccountUncheckedCreateWithoutWalletInput = {
    id?: string;
    email: string;
    firstName: string;
    password: string;
    lastName: string;
    refreshToken?: string | null;
    isVerified?: boolean;
    avatarUrl: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: UserUncheckedCreateNestedOneWithoutAccountInput;
    organizer?: OrganizerUncheckedCreateNestedOneWithoutAccountInput;
  };

  export type AccountCreateOrConnectWithoutWalletInput = {
    where: AccountWhereUniqueInput;
    create: XOR<
      AccountCreateWithoutWalletInput,
      AccountUncheckedCreateWithoutWalletInput
    >;
  };

  export type TransactionCreateWithoutWalletInput = {
    id?: string;
    amount: number;
    currency: $Enums.Currency;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    description?: string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TransactionUncheckedCreateWithoutWalletInput = {
    id?: string;
    amount: number;
    currency: $Enums.Currency;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    description?: string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TransactionCreateOrConnectWithoutWalletInput = {
    where: TransactionWhereUniqueInput;
    create: XOR<
      TransactionCreateWithoutWalletInput,
      TransactionUncheckedCreateWithoutWalletInput
    >;
  };

  export type TransactionCreateManyWalletInputEnvelope = {
    data: TransactionCreateManyWalletInput | TransactionCreateManyWalletInput[];
    skipDuplicates?: boolean;
  };

  export type AccountUpsertWithoutWalletInput = {
    update: XOR<
      AccountUpdateWithoutWalletInput,
      AccountUncheckedUpdateWithoutWalletInput
    >;
    create: XOR<
      AccountCreateWithoutWalletInput,
      AccountUncheckedCreateWithoutWalletInput
    >;
    where?: AccountWhereInput;
  };

  export type AccountUpdateToOneWithWhereWithoutWalletInput = {
    where?: AccountWhereInput;
    data: XOR<
      AccountUpdateWithoutWalletInput,
      AccountUncheckedUpdateWithoutWalletInput
    >;
  };

  export type AccountUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    avatarUrl?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutAccountNestedInput;
    organizer?: OrganizerUpdateOneWithoutAccountNestedInput;
  };

  export type AccountUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    avatarUrl?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUncheckedUpdateOneWithoutAccountNestedInput;
    organizer?: OrganizerUncheckedUpdateOneWithoutAccountNestedInput;
  };

  export type TransactionUpsertWithWhereUniqueWithoutWalletInput = {
    where: TransactionWhereUniqueInput;
    update: XOR<
      TransactionUpdateWithoutWalletInput,
      TransactionUncheckedUpdateWithoutWalletInput
    >;
    create: XOR<
      TransactionCreateWithoutWalletInput,
      TransactionUncheckedCreateWithoutWalletInput
    >;
  };

  export type TransactionUpdateWithWhereUniqueWithoutWalletInput = {
    where: TransactionWhereUniqueInput;
    data: XOR<
      TransactionUpdateWithoutWalletInput,
      TransactionUncheckedUpdateWithoutWalletInput
    >;
  };

  export type TransactionUpdateManyWithWhereWithoutWalletInput = {
    where: TransactionScalarWhereInput;
    data: XOR<
      TransactionUpdateManyMutationInput,
      TransactionUncheckedUpdateManyWithoutWalletInput
    >;
  };

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
    OR?: TransactionScalarWhereInput[];
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
    id?: StringFilter<"Transaction"> | string;
    walletId?: StringFilter<"Transaction"> | string;
    amount?: FloatFilter<"Transaction"> | number;
    currency?: EnumCurrencyFilter<"Transaction"> | $Enums.Currency;
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFilter<"Transaction">
      | $Enums.TransactionStatus;
    description?: StringNullableFilter<"Transaction"> | string | null;
    metadata?: JsonNullableFilter<"Transaction">;
    createdAt?: DateTimeFilter<"Transaction"> | Date | string;
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string;
  };

  export type WalletCreateWithoutTransactionsInput = {
    id?: string;
    totalBalance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    account?: AccountCreateNestedOneWithoutWalletInput;
  };

  export type WalletUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    totalBalance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    account?: AccountUncheckedCreateNestedOneWithoutWalletInput;
  };

  export type WalletCreateOrConnectWithoutTransactionsInput = {
    where: WalletWhereUniqueInput;
    create: XOR<
      WalletCreateWithoutTransactionsInput,
      WalletUncheckedCreateWithoutTransactionsInput
    >;
  };

  export type WalletUpsertWithoutTransactionsInput = {
    update: XOR<
      WalletUpdateWithoutTransactionsInput,
      WalletUncheckedUpdateWithoutTransactionsInput
    >;
    create: XOR<
      WalletCreateWithoutTransactionsInput,
      WalletUncheckedCreateWithoutTransactionsInput
    >;
    where?: WalletWhereInput;
  };

  export type WalletUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: WalletWhereInput;
    data: XOR<
      WalletUpdateWithoutTransactionsInput,
      WalletUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type WalletUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalBalance?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    account?: AccountUpdateOneWithoutWalletNestedInput;
  };

  export type WalletUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalBalance?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    account?: AccountUncheckedUpdateOneWithoutWalletNestedInput;
  };

  export type AccountCreateWithoutUserInput = {
    id?: string;
    email: string;
    firstName: string;
    password: string;
    lastName: string;
    refreshToken?: string | null;
    isVerified?: boolean;
    avatarUrl: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wallet: WalletCreateNestedOneWithoutAccountInput;
    organizer?: OrganizerCreateNestedOneWithoutAccountInput;
  };

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string;
    email: string;
    firstName: string;
    password: string;
    lastName: string;
    refreshToken?: string | null;
    isVerified?: boolean;
    avatarUrl: string;
    role: $Enums.Role;
    walletId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizer?: OrganizerUncheckedCreateNestedOneWithoutAccountInput;
  };

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput;
    create: XOR<
      AccountCreateWithoutUserInput,
      AccountUncheckedCreateWithoutUserInput
    >;
  };

  export type ReviewCreateWithoutUserInput = {
    id?: string;
    rating: number;
    message?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: EventCreateNestedOneWithoutReviewsInput;
  };

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string;
    rating: number;
    message?: string | null;
    eventId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput;
    create: XOR<
      ReviewCreateWithoutUserInput,
      ReviewUncheckedCreateWithoutUserInput
    >;
  };

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type AccountUpsertWithoutUserInput = {
    update: XOR<
      AccountUpdateWithoutUserInput,
      AccountUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      AccountCreateWithoutUserInput,
      AccountUncheckedCreateWithoutUserInput
    >;
    where?: AccountWhereInput;
  };

  export type AccountUpdateToOneWithWhereWithoutUserInput = {
    where?: AccountWhereInput;
    data: XOR<
      AccountUpdateWithoutUserInput,
      AccountUncheckedUpdateWithoutUserInput
    >;
  };

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    avatarUrl?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    wallet?: WalletUpdateOneRequiredWithoutAccountNestedInput;
    organizer?: OrganizerUpdateOneWithoutAccountNestedInput;
  };

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    avatarUrl?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    walletId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizer?: OrganizerUncheckedUpdateOneWithoutAccountNestedInput;
  };

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput;
    update: XOR<
      ReviewUpdateWithoutUserInput,
      ReviewUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ReviewCreateWithoutUserInput,
      ReviewUncheckedCreateWithoutUserInput
    >;
  };

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput;
    data: XOR<
      ReviewUpdateWithoutUserInput,
      ReviewUncheckedUpdateWithoutUserInput
    >;
  };

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput;
    data: XOR<
      ReviewUpdateManyMutationInput,
      ReviewUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
    OR?: ReviewScalarWhereInput[];
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
    id?: StringFilter<"Review"> | string;
    rating?: IntFilter<"Review"> | number;
    message?: StringNullableFilter<"Review"> | string | null;
    eventId?: StringFilter<"Review"> | string;
    userId?: StringFilter<"Review"> | string;
    createdAt?: DateTimeFilter<"Review"> | Date | string;
    updatedAt?: DateTimeFilter<"Review"> | Date | string;
  };

  export type OrganizerCreateWithoutOrganizationInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    account: AccountCreateNestedOneWithoutOrganizerInput;
  };

  export type OrganizerUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    accountId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizerCreateOrConnectWithoutOrganizationInput = {
    where: OrganizerWhereUniqueInput;
    create: XOR<
      OrganizerCreateWithoutOrganizationInput,
      OrganizerUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type OrganizerCreateManyOrganizationInputEnvelope = {
    data:
      | OrganizerCreateManyOrganizationInput
      | OrganizerCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type EventCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    description: string;
    bannerUrl?: string | null;
    gallery?: EventCreategalleryInput | string[];
    location: string;
    venue: string;
    currency: $Enums.Currency;
    onDate: Date | string;
    timezone: string;
    duration: number;
    eventType: $Enums.EventType;
    eventStatus?: $Enums.EventStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput;
    reviews?: ReviewCreateNestedManyWithoutEventInput;
  };

  export type EventUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    description: string;
    bannerUrl?: string | null;
    gallery?: EventCreategalleryInput | string[];
    location: string;
    venue: string;
    currency: $Enums.Currency;
    onDate: Date | string;
    timezone: string;
    duration: number;
    eventType: $Enums.EventType;
    eventStatus?: $Enums.EventStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput;
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput;
  };

  export type EventCreateOrConnectWithoutOrganizationInput = {
    where: EventWhereUniqueInput;
    create: XOR<
      EventCreateWithoutOrganizationInput,
      EventUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type EventCreateManyOrganizationInputEnvelope = {
    data: EventCreateManyOrganizationInput | EventCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type OrganizerUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizerWhereUniqueInput;
    update: XOR<
      OrganizerUpdateWithoutOrganizationInput,
      OrganizerUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      OrganizerCreateWithoutOrganizationInput,
      OrganizerUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type OrganizerUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizerWhereUniqueInput;
    data: XOR<
      OrganizerUpdateWithoutOrganizationInput,
      OrganizerUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type OrganizerUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizerScalarWhereInput;
    data: XOR<
      OrganizerUpdateManyMutationInput,
      OrganizerUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type OrganizerScalarWhereInput = {
    AND?: OrganizerScalarWhereInput | OrganizerScalarWhereInput[];
    OR?: OrganizerScalarWhereInput[];
    NOT?: OrganizerScalarWhereInput | OrganizerScalarWhereInput[];
    id?: StringFilter<"Organizer"> | string;
    accountId?: StringFilter<"Organizer"> | string;
    organizationId?: StringFilter<"Organizer"> | string;
    createdAt?: DateTimeFilter<"Organizer"> | Date | string;
    updatedAt?: DateTimeFilter<"Organizer"> | Date | string;
  };

  export type EventUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: EventWhereUniqueInput;
    update: XOR<
      EventUpdateWithoutOrganizationInput,
      EventUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      EventCreateWithoutOrganizationInput,
      EventUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type EventUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: EventWhereUniqueInput;
    data: XOR<
      EventUpdateWithoutOrganizationInput,
      EventUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type EventUpdateManyWithWhereWithoutOrganizationInput = {
    where: EventScalarWhereInput;
    data: XOR<
      EventUpdateManyMutationInput,
      EventUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[];
    OR?: EventScalarWhereInput[];
    NOT?: EventScalarWhereInput | EventScalarWhereInput[];
    id?: StringFilter<"Event"> | string;
    title?: StringFilter<"Event"> | string;
    description?: StringFilter<"Event"> | string;
    bannerUrl?: StringNullableFilter<"Event"> | string | null;
    gallery?: StringNullableListFilter<"Event">;
    location?: StringFilter<"Event"> | string;
    venue?: StringFilter<"Event"> | string;
    currency?: EnumCurrencyFilter<"Event"> | $Enums.Currency;
    onDate?: DateTimeFilter<"Event"> | Date | string;
    timezone?: StringFilter<"Event"> | string;
    duration?: FloatFilter<"Event"> | number;
    eventType?: EnumEventTypeFilter<"Event"> | $Enums.EventType;
    eventStatus?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus;
    organizationId?: StringFilter<"Event"> | string;
    createdAt?: DateTimeFilter<"Event"> | Date | string;
    updatedAt?: DateTimeFilter<"Event"> | Date | string;
  };

  export type OrganizationCreateWithoutMembersInput = {
    id?: string;
    organizationName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: EventCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutMembersInput = {
    id?: string;
    organizationName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: EventUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutMembersInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutMembersInput,
      OrganizationUncheckedCreateWithoutMembersInput
    >;
  };

  export type AccountCreateWithoutOrganizerInput = {
    id?: string;
    email: string;
    firstName: string;
    password: string;
    lastName: string;
    refreshToken?: string | null;
    isVerified?: boolean;
    avatarUrl: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wallet: WalletCreateNestedOneWithoutAccountInput;
    user?: UserCreateNestedOneWithoutAccountInput;
  };

  export type AccountUncheckedCreateWithoutOrganizerInput = {
    id?: string;
    email: string;
    firstName: string;
    password: string;
    lastName: string;
    refreshToken?: string | null;
    isVerified?: boolean;
    avatarUrl: string;
    role: $Enums.Role;
    walletId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: UserUncheckedCreateNestedOneWithoutAccountInput;
  };

  export type AccountCreateOrConnectWithoutOrganizerInput = {
    where: AccountWhereUniqueInput;
    create: XOR<
      AccountCreateWithoutOrganizerInput,
      AccountUncheckedCreateWithoutOrganizerInput
    >;
  };

  export type OrganizationUpsertWithoutMembersInput = {
    update: XOR<
      OrganizationUpdateWithoutMembersInput,
      OrganizationUncheckedUpdateWithoutMembersInput
    >;
    create: XOR<
      OrganizationCreateWithoutMembersInput,
      OrganizationUncheckedCreateWithoutMembersInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutMembersInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutMembersInput,
      OrganizationUncheckedUpdateWithoutMembersInput
    >;
  };

  export type OrganizationUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    events?: EventUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    events?: EventUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type AccountUpsertWithoutOrganizerInput = {
    update: XOR<
      AccountUpdateWithoutOrganizerInput,
      AccountUncheckedUpdateWithoutOrganizerInput
    >;
    create: XOR<
      AccountCreateWithoutOrganizerInput,
      AccountUncheckedCreateWithoutOrganizerInput
    >;
    where?: AccountWhereInput;
  };

  export type AccountUpdateToOneWithWhereWithoutOrganizerInput = {
    where?: AccountWhereInput;
    data: XOR<
      AccountUpdateWithoutOrganizerInput,
      AccountUncheckedUpdateWithoutOrganizerInput
    >;
  };

  export type AccountUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    avatarUrl?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    wallet?: WalletUpdateOneRequiredWithoutAccountNestedInput;
    user?: UserUpdateOneWithoutAccountNestedInput;
  };

  export type AccountUncheckedUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    avatarUrl?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    walletId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUncheckedUpdateOneWithoutAccountNestedInput;
  };

  export type OrganizationCreateWithoutEventsInput = {
    id?: string;
    organizationName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: OrganizerCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutEventsInput = {
    id?: string;
    organizationName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: OrganizerUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutEventsInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutEventsInput,
      OrganizationUncheckedCreateWithoutEventsInput
    >;
  };

  export type TicketTypeCreateWithoutEventInput = {
    id?: string;
    name: string;
    description?: string | null;
    total: number;
    locked?: number;
    booked?: number;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TicketTypeUncheckedCreateWithoutEventInput = {
    id?: string;
    name: string;
    description?: string | null;
    total: number;
    locked?: number;
    booked?: number;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TicketTypeCreateOrConnectWithoutEventInput = {
    where: TicketTypeWhereUniqueInput;
    create: XOR<
      TicketTypeCreateWithoutEventInput,
      TicketTypeUncheckedCreateWithoutEventInput
    >;
  };

  export type TicketTypeCreateManyEventInputEnvelope = {
    data: TicketTypeCreateManyEventInput | TicketTypeCreateManyEventInput[];
    skipDuplicates?: boolean;
  };

  export type ReviewCreateWithoutEventInput = {
    id?: string;
    rating: number;
    message?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutReviewsInput;
  };

  export type ReviewUncheckedCreateWithoutEventInput = {
    id?: string;
    rating: number;
    message?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReviewCreateOrConnectWithoutEventInput = {
    where: ReviewWhereUniqueInput;
    create: XOR<
      ReviewCreateWithoutEventInput,
      ReviewUncheckedCreateWithoutEventInput
    >;
  };

  export type ReviewCreateManyEventInputEnvelope = {
    data: ReviewCreateManyEventInput | ReviewCreateManyEventInput[];
    skipDuplicates?: boolean;
  };

  export type OrganizationUpsertWithoutEventsInput = {
    update: XOR<
      OrganizationUpdateWithoutEventsInput,
      OrganizationUncheckedUpdateWithoutEventsInput
    >;
    create: XOR<
      OrganizationCreateWithoutEventsInput,
      OrganizationUncheckedCreateWithoutEventsInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutEventsInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutEventsInput,
      OrganizationUncheckedUpdateWithoutEventsInput
    >;
  };

  export type OrganizationUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: OrganizerUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: OrganizerUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type TicketTypeUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketTypeWhereUniqueInput;
    update: XOR<
      TicketTypeUpdateWithoutEventInput,
      TicketTypeUncheckedUpdateWithoutEventInput
    >;
    create: XOR<
      TicketTypeCreateWithoutEventInput,
      TicketTypeUncheckedCreateWithoutEventInput
    >;
  };

  export type TicketTypeUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketTypeWhereUniqueInput;
    data: XOR<
      TicketTypeUpdateWithoutEventInput,
      TicketTypeUncheckedUpdateWithoutEventInput
    >;
  };

  export type TicketTypeUpdateManyWithWhereWithoutEventInput = {
    where: TicketTypeScalarWhereInput;
    data: XOR<
      TicketTypeUpdateManyMutationInput,
      TicketTypeUncheckedUpdateManyWithoutEventInput
    >;
  };

  export type TicketTypeScalarWhereInput = {
    AND?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[];
    OR?: TicketTypeScalarWhereInput[];
    NOT?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[];
    id?: StringFilter<"TicketType"> | string;
    eventId?: StringFilter<"TicketType"> | string;
    name?: StringFilter<"TicketType"> | string;
    description?: StringNullableFilter<"TicketType"> | string | null;
    total?: IntFilter<"TicketType"> | number;
    locked?: IntFilter<"TicketType"> | number;
    booked?: IntFilter<"TicketType"> | number;
    price?: FloatFilter<"TicketType"> | number;
    createdAt?: DateTimeFilter<"TicketType"> | Date | string;
    updatedAt?: DateTimeFilter<"TicketType"> | Date | string;
  };

  export type ReviewUpsertWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput;
    update: XOR<
      ReviewUpdateWithoutEventInput,
      ReviewUncheckedUpdateWithoutEventInput
    >;
    create: XOR<
      ReviewCreateWithoutEventInput,
      ReviewUncheckedCreateWithoutEventInput
    >;
  };

  export type ReviewUpdateWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput;
    data: XOR<
      ReviewUpdateWithoutEventInput,
      ReviewUncheckedUpdateWithoutEventInput
    >;
  };

  export type ReviewUpdateManyWithWhereWithoutEventInput = {
    where: ReviewScalarWhereInput;
    data: XOR<
      ReviewUpdateManyMutationInput,
      ReviewUncheckedUpdateManyWithoutEventInput
    >;
  };

  export type EventCreateWithoutReviewsInput = {
    id?: string;
    title: string;
    description: string;
    bannerUrl?: string | null;
    gallery?: EventCreategalleryInput | string[];
    location: string;
    venue: string;
    currency: $Enums.Currency;
    onDate: Date | string;
    timezone: string;
    duration: number;
    eventType: $Enums.EventType;
    eventStatus?: $Enums.EventStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutEventsInput;
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput;
  };

  export type EventUncheckedCreateWithoutReviewsInput = {
    id?: string;
    title: string;
    description: string;
    bannerUrl?: string | null;
    gallery?: EventCreategalleryInput | string[];
    location: string;
    venue: string;
    currency: $Enums.Currency;
    onDate: Date | string;
    timezone: string;
    duration: number;
    eventType: $Enums.EventType;
    eventStatus?: $Enums.EventStatus;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput;
  };

  export type EventCreateOrConnectWithoutReviewsInput = {
    where: EventWhereUniqueInput;
    create: XOR<
      EventCreateWithoutReviewsInput,
      EventUncheckedCreateWithoutReviewsInput
    >;
  };

  export type UserCreateWithoutReviewsInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    account: AccountCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string;
    accountId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutReviewsInput,
      UserUncheckedCreateWithoutReviewsInput
    >;
  };

  export type EventUpsertWithoutReviewsInput = {
    update: XOR<
      EventUpdateWithoutReviewsInput,
      EventUncheckedUpdateWithoutReviewsInput
    >;
    create: XOR<
      EventCreateWithoutReviewsInput,
      EventUncheckedCreateWithoutReviewsInput
    >;
    where?: EventWhereInput;
  };

  export type EventUpdateToOneWithWhereWithoutReviewsInput = {
    where?: EventWhereInput;
    data: XOR<
      EventUpdateWithoutReviewsInput,
      EventUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type EventUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    gallery?: EventUpdategalleryInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    venue?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    onDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    timezone?: StringFieldUpdateOperationsInput | string;
    duration?: FloatFieldUpdateOperationsInput | number;
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    eventStatus?:
      | EnumEventStatusFieldUpdateOperationsInput
      | $Enums.EventStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutEventsNestedInput;
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput;
  };

  export type EventUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    gallery?: EventUpdategalleryInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    venue?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    onDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    timezone?: StringFieldUpdateOperationsInput | string;
    duration?: FloatFieldUpdateOperationsInput | number;
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    eventStatus?:
      | EnumEventStatusFieldUpdateOperationsInput
      | $Enums.EventStatus;
    organizationId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput;
  };

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<
      UserUpdateWithoutReviewsInput,
      UserUncheckedUpdateWithoutReviewsInput
    >;
    create: XOR<
      UserCreateWithoutReviewsInput,
      UserUncheckedCreateWithoutReviewsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutReviewsInput,
      UserUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    account?: AccountUpdateOneRequiredWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventCreateWithoutTicketTypesInput = {
    id?: string;
    title: string;
    description: string;
    bannerUrl?: string | null;
    gallery?: EventCreategalleryInput | string[];
    location: string;
    venue: string;
    currency: $Enums.Currency;
    onDate: Date | string;
    timezone: string;
    duration: number;
    eventType: $Enums.EventType;
    eventStatus?: $Enums.EventStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutEventsInput;
    reviews?: ReviewCreateNestedManyWithoutEventInput;
  };

  export type EventUncheckedCreateWithoutTicketTypesInput = {
    id?: string;
    title: string;
    description: string;
    bannerUrl?: string | null;
    gallery?: EventCreategalleryInput | string[];
    location: string;
    venue: string;
    currency: $Enums.Currency;
    onDate: Date | string;
    timezone: string;
    duration: number;
    eventType: $Enums.EventType;
    eventStatus?: $Enums.EventStatus;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput;
  };

  export type EventCreateOrConnectWithoutTicketTypesInput = {
    where: EventWhereUniqueInput;
    create: XOR<
      EventCreateWithoutTicketTypesInput,
      EventUncheckedCreateWithoutTicketTypesInput
    >;
  };

  export type EventUpsertWithoutTicketTypesInput = {
    update: XOR<
      EventUpdateWithoutTicketTypesInput,
      EventUncheckedUpdateWithoutTicketTypesInput
    >;
    create: XOR<
      EventCreateWithoutTicketTypesInput,
      EventUncheckedCreateWithoutTicketTypesInput
    >;
    where?: EventWhereInput;
  };

  export type EventUpdateToOneWithWhereWithoutTicketTypesInput = {
    where?: EventWhereInput;
    data: XOR<
      EventUpdateWithoutTicketTypesInput,
      EventUncheckedUpdateWithoutTicketTypesInput
    >;
  };

  export type EventUpdateWithoutTicketTypesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    gallery?: EventUpdategalleryInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    venue?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    onDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    timezone?: StringFieldUpdateOperationsInput | string;
    duration?: FloatFieldUpdateOperationsInput | number;
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    eventStatus?:
      | EnumEventStatusFieldUpdateOperationsInput
      | $Enums.EventStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutEventsNestedInput;
    reviews?: ReviewUpdateManyWithoutEventNestedInput;
  };

  export type EventUncheckedUpdateWithoutTicketTypesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    gallery?: EventUpdategalleryInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    venue?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    onDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    timezone?: StringFieldUpdateOperationsInput | string;
    duration?: FloatFieldUpdateOperationsInput | number;
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    eventStatus?:
      | EnumEventStatusFieldUpdateOperationsInput
      | $Enums.EventStatus;
    organizationId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput;
  };

  export type TransactionCreateManyWalletInput = {
    id?: string;
    amount: number;
    currency: $Enums.Currency;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    description?: string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TransactionUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TransactionUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TransactionUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewCreateManyUserInput = {
    id?: string;
    rating: number;
    message?: string | null;
    eventId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    event?: EventUpdateOneRequiredWithoutReviewsNestedInput;
  };

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizerCreateManyOrganizationInput = {
    id?: string;
    accountId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type EventCreateManyOrganizationInput = {
    id?: string;
    title: string;
    description: string;
    bannerUrl?: string | null;
    gallery?: EventCreategalleryInput | string[];
    location: string;
    venue: string;
    currency: $Enums.Currency;
    onDate: Date | string;
    timezone: string;
    duration: number;
    eventType: $Enums.EventType;
    eventStatus?: $Enums.EventStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizerUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    account?: AccountUpdateOneRequiredWithoutOrganizerNestedInput;
  };

  export type OrganizerUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizerUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    gallery?: EventUpdategalleryInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    venue?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    onDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    timezone?: StringFieldUpdateOperationsInput | string;
    duration?: FloatFieldUpdateOperationsInput | number;
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    eventStatus?:
      | EnumEventStatusFieldUpdateOperationsInput
      | $Enums.EventStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput;
    reviews?: ReviewUpdateManyWithoutEventNestedInput;
  };

  export type EventUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    gallery?: EventUpdategalleryInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    venue?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    onDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    timezone?: StringFieldUpdateOperationsInput | string;
    duration?: FloatFieldUpdateOperationsInput | number;
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    eventStatus?:
      | EnumEventStatusFieldUpdateOperationsInput
      | $Enums.EventStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput;
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput;
  };

  export type EventUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    gallery?: EventUpdategalleryInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    venue?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    onDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    timezone?: StringFieldUpdateOperationsInput | string;
    duration?: FloatFieldUpdateOperationsInput | number;
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    eventStatus?:
      | EnumEventStatusFieldUpdateOperationsInput
      | $Enums.EventStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TicketTypeCreateManyEventInput = {
    id?: string;
    name: string;
    description?: string | null;
    total: number;
    locked?: number;
    booked?: number;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReviewCreateManyEventInput = {
    id?: string;
    rating: number;
    message?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TicketTypeUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    total?: IntFieldUpdateOperationsInput | number;
    locked?: IntFieldUpdateOperationsInput | number;
    booked?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TicketTypeUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    total?: IntFieldUpdateOperationsInput | number;
    locked?: IntFieldUpdateOperationsInput | number;
    booked?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TicketTypeUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    total?: IntFieldUpdateOperationsInput | number;
    locked?: IntFieldUpdateOperationsInput | number;
    booked?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput;
  };

  export type ReviewUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
