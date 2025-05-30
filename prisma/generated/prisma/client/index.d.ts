
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Farm
 * 
 */
export type Farm = $Result.DefaultSelection<Prisma.$FarmPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model EmployeeFarm
 * 
 */
export type EmployeeFarm = $Result.DefaultSelection<Prisma.$EmployeeFarmPayload>
/**
 * Model EmployeeBenefit
 * 
 */
export type EmployeeBenefit = $Result.DefaultSelection<Prisma.$EmployeeBenefitPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.farm`: Exposes CRUD operations for the **Farm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Farms
    * const farms = await prisma.farm.findMany()
    * ```
    */
  get farm(): Prisma.FarmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeFarm`: Exposes CRUD operations for the **EmployeeFarm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeFarms
    * const employeeFarms = await prisma.employeeFarm.findMany()
    * ```
    */
  get employeeFarm(): Prisma.EmployeeFarmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeBenefit`: Exposes CRUD operations for the **EmployeeBenefit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeBenefits
    * const employeeBenefits = await prisma.employeeBenefit.findMany()
    * ```
    */
  get employeeBenefit(): Prisma.EmployeeBenefitDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Farm: 'Farm',
    Employee: 'Employee',
    EmployeeFarm: 'EmployeeFarm',
    EmployeeBenefit: 'EmployeeBenefit'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "farm" | "employee" | "employeeFarm" | "employeeBenefit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Farm: {
        payload: Prisma.$FarmPayload<ExtArgs>
        fields: Prisma.FarmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          findFirst: {
            args: Prisma.FarmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          findMany: {
            args: Prisma.FarmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>[]
          }
          create: {
            args: Prisma.FarmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          createMany: {
            args: Prisma.FarmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FarmCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>[]
          }
          delete: {
            args: Prisma.FarmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          update: {
            args: Prisma.FarmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          deleteMany: {
            args: Prisma.FarmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FarmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FarmUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>[]
          }
          upsert: {
            args: Prisma.FarmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          aggregate: {
            args: Prisma.FarmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarm>
          }
          groupBy: {
            args: Prisma.FarmGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmCountArgs<ExtArgs>
            result: $Utils.Optional<FarmCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      EmployeeFarm: {
        payload: Prisma.$EmployeeFarmPayload<ExtArgs>
        fields: Prisma.EmployeeFarmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFarmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeFarmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFarmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeFarmPayload>
          }
          findFirst: {
            args: Prisma.EmployeeFarmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeFarmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFarmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeFarmPayload>
          }
          findMany: {
            args: Prisma.EmployeeFarmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeFarmPayload>[]
          }
          create: {
            args: Prisma.EmployeeFarmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeFarmPayload>
          }
          createMany: {
            args: Prisma.EmployeeFarmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeFarmCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeFarmPayload>[]
          }
          delete: {
            args: Prisma.EmployeeFarmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeFarmPayload>
          }
          update: {
            args: Prisma.EmployeeFarmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeFarmPayload>
          }
          deleteMany: {
            args: Prisma.EmployeeFarmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeFarmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeFarmUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeFarmPayload>[]
          }
          upsert: {
            args: Prisma.EmployeeFarmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeFarmPayload>
          }
          aggregate: {
            args: Prisma.EmployeeFarmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeFarm>
          }
          groupBy: {
            args: Prisma.EmployeeFarmGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeFarmGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeFarmCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeFarmCountAggregateOutputType> | number
          }
        }
      }
      EmployeeBenefit: {
        payload: Prisma.$EmployeeBenefitPayload<ExtArgs>
        fields: Prisma.EmployeeBenefitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeBenefitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeBenefitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeBenefitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeBenefitPayload>
          }
          findFirst: {
            args: Prisma.EmployeeBenefitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeBenefitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeBenefitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeBenefitPayload>
          }
          findMany: {
            args: Prisma.EmployeeBenefitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeBenefitPayload>[]
          }
          create: {
            args: Prisma.EmployeeBenefitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeBenefitPayload>
          }
          createMany: {
            args: Prisma.EmployeeBenefitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeBenefitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeBenefitPayload>[]
          }
          delete: {
            args: Prisma.EmployeeBenefitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeBenefitPayload>
          }
          update: {
            args: Prisma.EmployeeBenefitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeBenefitPayload>
          }
          deleteMany: {
            args: Prisma.EmployeeBenefitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeBenefitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeBenefitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeBenefitPayload>[]
          }
          upsert: {
            args: Prisma.EmployeeBenefitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeBenefitPayload>
          }
          aggregate: {
            args: Prisma.EmployeeBenefitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeBenefit>
          }
          groupBy: {
            args: Prisma.EmployeeBenefitGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeBenefitGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeBenefitCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeBenefitCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    farm?: FarmOmit
    employee?: EmployeeOmit
    employeeFarm?: EmployeeFarmOmit
    employeeBenefit?: EmployeeBenefitOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    farms: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farms?: boolean | UserCountOutputTypeCountFarmsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmWhereInput
  }


  /**
   * Count Type FarmCountOutputType
   */

  export type FarmCountOutputType = {
    employees: number
  }

  export type FarmCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | FarmCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * FarmCountOutputType without action
   */
  export type FarmCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCountOutputType
     */
    select?: FarmCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FarmCountOutputType without action
   */
  export type FarmCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeFarmWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    benefits: number
    farms: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    benefits?: boolean | EmployeeCountOutputTypeCountBenefitsArgs
    farms?: boolean | EmployeeCountOutputTypeCountFarmsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountBenefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeBenefitWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountFarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeFarmWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    yearsOfExperience: number | null
  }

  export type UserSumAggregateOutputType = {
    yearsOfExperience: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    gender: string | null
    dob: string | null
    residenceCounty: string | null
    residenceLocation: string | null
    email: string | null
    phoneNumber: string | null
    businessNumber: string | null
    pin: string | null
    yearsOfExperience: number | null
    otp: string | null
    otpExpiry: Date | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    gender: string | null
    dob: string | null
    residenceCounty: string | null
    residenceLocation: string | null
    email: string | null
    phoneNumber: string | null
    businessNumber: string | null
    pin: string | null
    yearsOfExperience: number | null
    otp: string | null
    otpExpiry: Date | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    middleName: number
    lastName: number
    gender: number
    dob: number
    residenceCounty: number
    residenceLocation: number
    email: number
    phoneNumber: number
    businessNumber: number
    pin: number
    yearsOfExperience: number
    otp: number
    otpExpiry: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    yearsOfExperience?: true
  }

  export type UserSumAggregateInputType = {
    yearsOfExperience?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    middleName?: true
    lastName?: true
    gender?: true
    dob?: true
    residenceCounty?: true
    residenceLocation?: true
    email?: true
    phoneNumber?: true
    businessNumber?: true
    pin?: true
    yearsOfExperience?: true
    otp?: true
    otpExpiry?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    middleName?: true
    lastName?: true
    gender?: true
    dob?: true
    residenceCounty?: true
    residenceLocation?: true
    email?: true
    phoneNumber?: true
    businessNumber?: true
    pin?: true
    yearsOfExperience?: true
    otp?: true
    otpExpiry?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    middleName?: true
    lastName?: true
    gender?: true
    dob?: true
    residenceCounty?: true
    residenceLocation?: true
    email?: true
    phoneNumber?: true
    businessNumber?: true
    pin?: true
    yearsOfExperience?: true
    otp?: true
    otpExpiry?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    middleName: string | null
    lastName: string
    gender: string
    dob: string
    residenceCounty: string
    residenceLocation: string | null
    email: string | null
    phoneNumber: string
    businessNumber: string | null
    pin: string
    yearsOfExperience: number | null
    otp: string | null
    otpExpiry: Date | null
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    gender?: boolean
    dob?: boolean
    residenceCounty?: boolean
    residenceLocation?: boolean
    email?: boolean
    phoneNumber?: boolean
    businessNumber?: boolean
    pin?: boolean
    yearsOfExperience?: boolean
    otp?: boolean
    otpExpiry?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farms?: boolean | User$farmsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    gender?: boolean
    dob?: boolean
    residenceCounty?: boolean
    residenceLocation?: boolean
    email?: boolean
    phoneNumber?: boolean
    businessNumber?: boolean
    pin?: boolean
    yearsOfExperience?: boolean
    otp?: boolean
    otpExpiry?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    gender?: boolean
    dob?: boolean
    residenceCounty?: boolean
    residenceLocation?: boolean
    email?: boolean
    phoneNumber?: boolean
    businessNumber?: boolean
    pin?: boolean
    yearsOfExperience?: boolean
    otp?: boolean
    otpExpiry?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    gender?: boolean
    dob?: boolean
    residenceCounty?: boolean
    residenceLocation?: boolean
    email?: boolean
    phoneNumber?: boolean
    businessNumber?: boolean
    pin?: boolean
    yearsOfExperience?: boolean
    otp?: boolean
    otpExpiry?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "middleName" | "lastName" | "gender" | "dob" | "residenceCounty" | "residenceLocation" | "email" | "phoneNumber" | "businessNumber" | "pin" | "yearsOfExperience" | "otp" | "otpExpiry" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farms?: boolean | User$farmsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      farms: Prisma.$FarmPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      middleName: string | null
      lastName: string
      gender: string
      dob: string
      residenceCounty: string
      residenceLocation: string | null
      email: string | null
      phoneNumber: string
      businessNumber: string | null
      pin: string
      yearsOfExperience: number | null
      otp: string | null
      otpExpiry: Date | null
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farms<T extends User$farmsArgs<ExtArgs> = {}>(args?: Subset<T, User$farmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly middleName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly dob: FieldRef<"User", 'String'>
    readonly residenceCounty: FieldRef<"User", 'String'>
    readonly residenceLocation: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly businessNumber: FieldRef<"User", 'String'>
    readonly pin: FieldRef<"User", 'String'>
    readonly yearsOfExperience: FieldRef<"User", 'Int'>
    readonly otp: FieldRef<"User", 'String'>
    readonly otpExpiry: FieldRef<"User", 'DateTime'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.farms
   */
  export type User$farmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    where?: FarmWhereInput
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    cursor?: FarmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Farm
   */

  export type AggregateFarm = {
    _count: FarmCountAggregateOutputType | null
    _avg: FarmAvgAggregateOutputType | null
    _sum: FarmSumAggregateOutputType | null
    _min: FarmMinAggregateOutputType | null
    _max: FarmMaxAggregateOutputType | null
  }

  export type FarmAvgAggregateOutputType = {
    size: number | null
  }

  export type FarmSumAggregateOutputType = {
    size: number | null
  }

  export type FarmMinAggregateOutputType = {
    id: string | null
    name: string | null
    county: string | null
    administrativeLocation: string | null
    size: number | null
    ownership: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmMaxAggregateOutputType = {
    id: string | null
    name: string | null
    county: string | null
    administrativeLocation: string | null
    size: number | null
    ownership: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmCountAggregateOutputType = {
    id: number
    name: number
    county: number
    administrativeLocation: number
    size: number
    ownership: number
    farmingTypes: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FarmAvgAggregateInputType = {
    size?: true
  }

  export type FarmSumAggregateInputType = {
    size?: true
  }

  export type FarmMinAggregateInputType = {
    id?: true
    name?: true
    county?: true
    administrativeLocation?: true
    size?: true
    ownership?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmMaxAggregateInputType = {
    id?: true
    name?: true
    county?: true
    administrativeLocation?: true
    size?: true
    ownership?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmCountAggregateInputType = {
    id?: true
    name?: true
    county?: true
    administrativeLocation?: true
    size?: true
    ownership?: true
    farmingTypes?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FarmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farm to aggregate.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Farms
    **/
    _count?: true | FarmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FarmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FarmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmMaxAggregateInputType
  }

  export type GetFarmAggregateType<T extends FarmAggregateArgs> = {
        [P in keyof T & keyof AggregateFarm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarm[P]>
      : GetScalarType<T[P], AggregateFarm[P]>
  }




  export type FarmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmWhereInput
    orderBy?: FarmOrderByWithAggregationInput | FarmOrderByWithAggregationInput[]
    by: FarmScalarFieldEnum[] | FarmScalarFieldEnum
    having?: FarmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmCountAggregateInputType | true
    _avg?: FarmAvgAggregateInputType
    _sum?: FarmSumAggregateInputType
    _min?: FarmMinAggregateInputType
    _max?: FarmMaxAggregateInputType
  }

  export type FarmGroupByOutputType = {
    id: string
    name: string
    county: string
    administrativeLocation: string
    size: number
    ownership: string
    farmingTypes: string[]
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: FarmCountAggregateOutputType | null
    _avg: FarmAvgAggregateOutputType | null
    _sum: FarmSumAggregateOutputType | null
    _min: FarmMinAggregateOutputType | null
    _max: FarmMaxAggregateOutputType | null
  }

  type GetFarmGroupByPayload<T extends FarmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmGroupByOutputType[P]>
            : GetScalarType<T[P], FarmGroupByOutputType[P]>
        }
      >
    >


  export type FarmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    county?: boolean
    administrativeLocation?: boolean
    size?: boolean
    ownership?: boolean
    farmingTypes?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employees?: boolean | Farm$employeesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | FarmCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farm"]>

  export type FarmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    county?: boolean
    administrativeLocation?: boolean
    size?: boolean
    ownership?: boolean
    farmingTypes?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farm"]>

  export type FarmSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    county?: boolean
    administrativeLocation?: boolean
    size?: boolean
    ownership?: boolean
    farmingTypes?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farm"]>

  export type FarmSelectScalar = {
    id?: boolean
    name?: boolean
    county?: boolean
    administrativeLocation?: boolean
    size?: boolean
    ownership?: boolean
    farmingTypes?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FarmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "county" | "administrativeLocation" | "size" | "ownership" | "farmingTypes" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["farm"]>
  export type FarmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Farm$employeesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | FarmCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FarmIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FarmIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FarmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Farm"
    objects: {
      employees: Prisma.$EmployeeFarmPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      county: string
      administrativeLocation: string
      size: number
      ownership: string
      farmingTypes: string[]
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["farm"]>
    composites: {}
  }

  type FarmGetPayload<S extends boolean | null | undefined | FarmDefaultArgs> = $Result.GetResult<Prisma.$FarmPayload, S>

  type FarmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FarmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FarmCountAggregateInputType | true
    }

  export interface FarmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Farm'], meta: { name: 'Farm' } }
    /**
     * Find zero or one Farm that matches the filter.
     * @param {FarmFindUniqueArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmFindUniqueArgs>(args: SelectSubset<T, FarmFindUniqueArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Farm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FarmFindUniqueOrThrowArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmFindUniqueOrThrowArgs>(args: SelectSubset<T, FarmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindFirstArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmFindFirstArgs>(args?: SelectSubset<T, FarmFindFirstArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindFirstOrThrowArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmFindFirstOrThrowArgs>(args?: SelectSubset<T, FarmFindFirstOrThrowArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Farms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farms
     * const farms = await prisma.farm.findMany()
     * 
     * // Get first 10 Farms
     * const farms = await prisma.farm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmWithIdOnly = await prisma.farm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FarmFindManyArgs>(args?: SelectSubset<T, FarmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Farm.
     * @param {FarmCreateArgs} args - Arguments to create a Farm.
     * @example
     * // Create one Farm
     * const Farm = await prisma.farm.create({
     *   data: {
     *     // ... data to create a Farm
     *   }
     * })
     * 
     */
    create<T extends FarmCreateArgs>(args: SelectSubset<T, FarmCreateArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Farms.
     * @param {FarmCreateManyArgs} args - Arguments to create many Farms.
     * @example
     * // Create many Farms
     * const farm = await prisma.farm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FarmCreateManyArgs>(args?: SelectSubset<T, FarmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Farms and returns the data saved in the database.
     * @param {FarmCreateManyAndReturnArgs} args - Arguments to create many Farms.
     * @example
     * // Create many Farms
     * const farm = await prisma.farm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Farms and only return the `id`
     * const farmWithIdOnly = await prisma.farm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FarmCreateManyAndReturnArgs>(args?: SelectSubset<T, FarmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Farm.
     * @param {FarmDeleteArgs} args - Arguments to delete one Farm.
     * @example
     * // Delete one Farm
     * const Farm = await prisma.farm.delete({
     *   where: {
     *     // ... filter to delete one Farm
     *   }
     * })
     * 
     */
    delete<T extends FarmDeleteArgs>(args: SelectSubset<T, FarmDeleteArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Farm.
     * @param {FarmUpdateArgs} args - Arguments to update one Farm.
     * @example
     * // Update one Farm
     * const farm = await prisma.farm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FarmUpdateArgs>(args: SelectSubset<T, FarmUpdateArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Farms.
     * @param {FarmDeleteManyArgs} args - Arguments to filter Farms to delete.
     * @example
     * // Delete a few Farms
     * const { count } = await prisma.farm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FarmDeleteManyArgs>(args?: SelectSubset<T, FarmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farms
     * const farm = await prisma.farm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FarmUpdateManyArgs>(args: SelectSubset<T, FarmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farms and returns the data updated in the database.
     * @param {FarmUpdateManyAndReturnArgs} args - Arguments to update many Farms.
     * @example
     * // Update many Farms
     * const farm = await prisma.farm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Farms and only return the `id`
     * const farmWithIdOnly = await prisma.farm.updateManyAndReturn({
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
    updateManyAndReturn<T extends FarmUpdateManyAndReturnArgs>(args: SelectSubset<T, FarmUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Farm.
     * @param {FarmUpsertArgs} args - Arguments to update or create a Farm.
     * @example
     * // Update or create a Farm
     * const farm = await prisma.farm.upsert({
     *   create: {
     *     // ... data to create a Farm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farm we want to update
     *   }
     * })
     */
    upsert<T extends FarmUpsertArgs>(args: SelectSubset<T, FarmUpsertArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmCountArgs} args - Arguments to filter Farms to count.
     * @example
     * // Count the number of Farms
     * const count = await prisma.farm.count({
     *   where: {
     *     // ... the filter for the Farms we want to count
     *   }
     * })
    **/
    count<T extends FarmCountArgs>(
      args?: Subset<T, FarmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Farm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FarmAggregateArgs>(args: Subset<T, FarmAggregateArgs>): Prisma.PrismaPromise<GetFarmAggregateType<T>>

    /**
     * Group by Farm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmGroupByArgs} args - Group by arguments.
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
      T extends FarmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmGroupByArgs['orderBy'] }
        : { orderBy?: FarmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FarmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Farm model
   */
  readonly fields: FarmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Farm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends Farm$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Farm$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeFarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Farm model
   */
  interface FarmFieldRefs {
    readonly id: FieldRef<"Farm", 'String'>
    readonly name: FieldRef<"Farm", 'String'>
    readonly county: FieldRef<"Farm", 'String'>
    readonly administrativeLocation: FieldRef<"Farm", 'String'>
    readonly size: FieldRef<"Farm", 'Float'>
    readonly ownership: FieldRef<"Farm", 'String'>
    readonly farmingTypes: FieldRef<"Farm", 'String[]'>
    readonly userId: FieldRef<"Farm", 'String'>
    readonly createdAt: FieldRef<"Farm", 'DateTime'>
    readonly updatedAt: FieldRef<"Farm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Farm findUnique
   */
  export type FarmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm findUniqueOrThrow
   */
  export type FarmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm findFirst
   */
  export type FarmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farms.
     */
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm findFirstOrThrow
   */
  export type FarmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farms.
     */
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm findMany
   */
  export type FarmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farms to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm create
   */
  export type FarmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The data needed to create a Farm.
     */
    data: XOR<FarmCreateInput, FarmUncheckedCreateInput>
  }

  /**
   * Farm createMany
   */
  export type FarmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Farms.
     */
    data: FarmCreateManyInput | FarmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Farm createManyAndReturn
   */
  export type FarmCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * The data used to create many Farms.
     */
    data: FarmCreateManyInput | FarmCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Farm update
   */
  export type FarmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The data needed to update a Farm.
     */
    data: XOR<FarmUpdateInput, FarmUncheckedUpdateInput>
    /**
     * Choose, which Farm to update.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm updateMany
   */
  export type FarmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Farms.
     */
    data: XOR<FarmUpdateManyMutationInput, FarmUncheckedUpdateManyInput>
    /**
     * Filter which Farms to update
     */
    where?: FarmWhereInput
    /**
     * Limit how many Farms to update.
     */
    limit?: number
  }

  /**
   * Farm updateManyAndReturn
   */
  export type FarmUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * The data used to update Farms.
     */
    data: XOR<FarmUpdateManyMutationInput, FarmUncheckedUpdateManyInput>
    /**
     * Filter which Farms to update
     */
    where?: FarmWhereInput
    /**
     * Limit how many Farms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Farm upsert
   */
  export type FarmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The filter to search for the Farm to update in case it exists.
     */
    where: FarmWhereUniqueInput
    /**
     * In case the Farm found by the `where` argument doesn't exist, create a new Farm with this data.
     */
    create: XOR<FarmCreateInput, FarmUncheckedCreateInput>
    /**
     * In case the Farm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmUpdateInput, FarmUncheckedUpdateInput>
  }

  /**
   * Farm delete
   */
  export type FarmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter which Farm to delete.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm deleteMany
   */
  export type FarmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farms to delete
     */
    where?: FarmWhereInput
    /**
     * Limit how many Farms to delete.
     */
    limit?: number
  }

  /**
   * Farm.employees
   */
  export type Farm$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeFarm
     */
    select?: EmployeeFarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeFarm
     */
    omit?: EmployeeFarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeFarmInclude<ExtArgs> | null
    where?: EmployeeFarmWhereInput
    orderBy?: EmployeeFarmOrderByWithRelationInput | EmployeeFarmOrderByWithRelationInput[]
    cursor?: EmployeeFarmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeFarmScalarFieldEnum | EmployeeFarmScalarFieldEnum[]
  }

  /**
   * Farm without action
   */
  export type FarmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    salary: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    salary: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    phone: string | null
    emergencyContact: string | null
    idNumber: string | null
    idPhoto: string | null
    employeeType: string | null
    dateOfEmployment: Date | null
    endDate: Date | null
    role: string | null
    customRole: string | null
    paymentSchedule: string | null
    salary: number | null
    typeOfEngagement: string | null
    workSchedule: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    phone: string | null
    emergencyContact: string | null
    idNumber: string | null
    idPhoto: string | null
    employeeType: string | null
    dateOfEmployment: Date | null
    endDate: Date | null
    role: string | null
    customRole: string | null
    paymentSchedule: string | null
    salary: number | null
    typeOfEngagement: string | null
    workSchedule: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    firstName: number
    middleName: number
    lastName: number
    phone: number
    emergencyContact: number
    idNumber: number
    idPhoto: number
    employeeType: number
    dateOfEmployment: number
    endDate: number
    role: number
    customRole: number
    paymentSchedule: number
    salary: number
    typeOfEngagement: number
    workSchedule: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    salary?: true
  }

  export type EmployeeSumAggregateInputType = {
    salary?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    firstName?: true
    middleName?: true
    lastName?: true
    phone?: true
    emergencyContact?: true
    idNumber?: true
    idPhoto?: true
    employeeType?: true
    dateOfEmployment?: true
    endDate?: true
    role?: true
    customRole?: true
    paymentSchedule?: true
    salary?: true
    typeOfEngagement?: true
    workSchedule?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    firstName?: true
    middleName?: true
    lastName?: true
    phone?: true
    emergencyContact?: true
    idNumber?: true
    idPhoto?: true
    employeeType?: true
    dateOfEmployment?: true
    endDate?: true
    role?: true
    customRole?: true
    paymentSchedule?: true
    salary?: true
    typeOfEngagement?: true
    workSchedule?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    firstName?: true
    middleName?: true
    lastName?: true
    phone?: true
    emergencyContact?: true
    idNumber?: true
    idPhoto?: true
    employeeType?: true
    dateOfEmployment?: true
    endDate?: true
    role?: true
    customRole?: true
    paymentSchedule?: true
    salary?: true
    typeOfEngagement?: true
    workSchedule?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    firstName: string
    middleName: string | null
    lastName: string
    phone: string
    emergencyContact: string | null
    idNumber: string
    idPhoto: string | null
    employeeType: string
    dateOfEmployment: Date
    endDate: Date | null
    role: string
    customRole: string | null
    paymentSchedule: string
    salary: number
    typeOfEngagement: string | null
    workSchedule: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    phone?: boolean
    emergencyContact?: boolean
    idNumber?: boolean
    idPhoto?: boolean
    employeeType?: boolean
    dateOfEmployment?: boolean
    endDate?: boolean
    role?: boolean
    customRole?: boolean
    paymentSchedule?: boolean
    salary?: boolean
    typeOfEngagement?: boolean
    workSchedule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    benefits?: boolean | Employee$benefitsArgs<ExtArgs>
    farms?: boolean | Employee$farmsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    phone?: boolean
    emergencyContact?: boolean
    idNumber?: boolean
    idPhoto?: boolean
    employeeType?: boolean
    dateOfEmployment?: boolean
    endDate?: boolean
    role?: boolean
    customRole?: boolean
    paymentSchedule?: boolean
    salary?: boolean
    typeOfEngagement?: boolean
    workSchedule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    phone?: boolean
    emergencyContact?: boolean
    idNumber?: boolean
    idPhoto?: boolean
    employeeType?: boolean
    dateOfEmployment?: boolean
    endDate?: boolean
    role?: boolean
    customRole?: boolean
    paymentSchedule?: boolean
    salary?: boolean
    typeOfEngagement?: boolean
    workSchedule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    phone?: boolean
    emergencyContact?: boolean
    idNumber?: boolean
    idPhoto?: boolean
    employeeType?: boolean
    dateOfEmployment?: boolean
    endDate?: boolean
    role?: boolean
    customRole?: boolean
    paymentSchedule?: boolean
    salary?: boolean
    typeOfEngagement?: boolean
    workSchedule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "middleName" | "lastName" | "phone" | "emergencyContact" | "idNumber" | "idPhoto" | "employeeType" | "dateOfEmployment" | "endDate" | "role" | "customRole" | "paymentSchedule" | "salary" | "typeOfEngagement" | "workSchedule" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    benefits?: boolean | Employee$benefitsArgs<ExtArgs>
    farms?: boolean | Employee$farmsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      benefits: Prisma.$EmployeeBenefitPayload<ExtArgs>[]
      farms: Prisma.$EmployeeFarmPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      middleName: string | null
      lastName: string
      phone: string
      emergencyContact: string | null
      idNumber: string
      idPhoto: string | null
      employeeType: string
      dateOfEmployment: Date
      endDate: Date | null
      role: string
      customRole: string | null
      paymentSchedule: string
      salary: number
      typeOfEngagement: string | null
      workSchedule: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    benefits<T extends Employee$benefitsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$benefitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeBenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    farms<T extends Employee$farmsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$farmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeFarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly firstName: FieldRef<"Employee", 'String'>
    readonly middleName: FieldRef<"Employee", 'String'>
    readonly lastName: FieldRef<"Employee", 'String'>
    readonly phone: FieldRef<"Employee", 'String'>
    readonly emergencyContact: FieldRef<"Employee", 'String'>
    readonly idNumber: FieldRef<"Employee", 'String'>
    readonly idPhoto: FieldRef<"Employee", 'String'>
    readonly employeeType: FieldRef<"Employee", 'String'>
    readonly dateOfEmployment: FieldRef<"Employee", 'DateTime'>
    readonly endDate: FieldRef<"Employee", 'DateTime'>
    readonly role: FieldRef<"Employee", 'String'>
    readonly customRole: FieldRef<"Employee", 'String'>
    readonly paymentSchedule: FieldRef<"Employee", 'String'>
    readonly salary: FieldRef<"Employee", 'Float'>
    readonly typeOfEngagement: FieldRef<"Employee", 'String'>
    readonly workSchedule: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.benefits
   */
  export type Employee$benefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeBenefit
     */
    select?: EmployeeBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeBenefit
     */
    omit?: EmployeeBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeBenefitInclude<ExtArgs> | null
    where?: EmployeeBenefitWhereInput
    orderBy?: EmployeeBenefitOrderByWithRelationInput | EmployeeBenefitOrderByWithRelationInput[]
    cursor?: EmployeeBenefitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeBenefitScalarFieldEnum | EmployeeBenefitScalarFieldEnum[]
  }

  /**
   * Employee.farms
   */
  export type Employee$farmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeFarm
     */
    select?: EmployeeFarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeFarm
     */
    omit?: EmployeeFarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeFarmInclude<ExtArgs> | null
    where?: EmployeeFarmWhereInput
    orderBy?: EmployeeFarmOrderByWithRelationInput | EmployeeFarmOrderByWithRelationInput[]
    cursor?: EmployeeFarmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeFarmScalarFieldEnum | EmployeeFarmScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeFarm
   */

  export type AggregateEmployeeFarm = {
    _count: EmployeeFarmCountAggregateOutputType | null
    _min: EmployeeFarmMinAggregateOutputType | null
    _max: EmployeeFarmMaxAggregateOutputType | null
  }

  export type EmployeeFarmMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    farmId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeFarmMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    farmId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeFarmCountAggregateOutputType = {
    id: number
    employeeId: number
    farmId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeFarmMinAggregateInputType = {
    id?: true
    employeeId?: true
    farmId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeFarmMaxAggregateInputType = {
    id?: true
    employeeId?: true
    farmId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeFarmCountAggregateInputType = {
    id?: true
    employeeId?: true
    farmId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeFarmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeFarm to aggregate.
     */
    where?: EmployeeFarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeFarms to fetch.
     */
    orderBy?: EmployeeFarmOrderByWithRelationInput | EmployeeFarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeFarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeFarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeFarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeFarms
    **/
    _count?: true | EmployeeFarmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeFarmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeFarmMaxAggregateInputType
  }

  export type GetEmployeeFarmAggregateType<T extends EmployeeFarmAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeFarm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeFarm[P]>
      : GetScalarType<T[P], AggregateEmployeeFarm[P]>
  }




  export type EmployeeFarmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeFarmWhereInput
    orderBy?: EmployeeFarmOrderByWithAggregationInput | EmployeeFarmOrderByWithAggregationInput[]
    by: EmployeeFarmScalarFieldEnum[] | EmployeeFarmScalarFieldEnum
    having?: EmployeeFarmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeFarmCountAggregateInputType | true
    _min?: EmployeeFarmMinAggregateInputType
    _max?: EmployeeFarmMaxAggregateInputType
  }

  export type EmployeeFarmGroupByOutputType = {
    id: string
    employeeId: string
    farmId: string
    createdAt: Date
    updatedAt: Date
    _count: EmployeeFarmCountAggregateOutputType | null
    _min: EmployeeFarmMinAggregateOutputType | null
    _max: EmployeeFarmMaxAggregateOutputType | null
  }

  type GetEmployeeFarmGroupByPayload<T extends EmployeeFarmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeFarmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeFarmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeFarmGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeFarmGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeFarmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    farmId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeFarm"]>

  export type EmployeeFarmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    farmId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeFarm"]>

  export type EmployeeFarmSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    farmId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeFarm"]>

  export type EmployeeFarmSelectScalar = {
    id?: boolean
    employeeId?: boolean
    farmId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeFarmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "farmId" | "createdAt" | "updatedAt", ExtArgs["result"]["employeeFarm"]>
  export type EmployeeFarmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }
  export type EmployeeFarmIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }
  export type EmployeeFarmIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }

  export type $EmployeeFarmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeFarm"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      farm: Prisma.$FarmPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      farmId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employeeFarm"]>
    composites: {}
  }

  type EmployeeFarmGetPayload<S extends boolean | null | undefined | EmployeeFarmDefaultArgs> = $Result.GetResult<Prisma.$EmployeeFarmPayload, S>

  type EmployeeFarmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFarmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeFarmCountAggregateInputType | true
    }

  export interface EmployeeFarmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeFarm'], meta: { name: 'EmployeeFarm' } }
    /**
     * Find zero or one EmployeeFarm that matches the filter.
     * @param {EmployeeFarmFindUniqueArgs} args - Arguments to find a EmployeeFarm
     * @example
     * // Get one EmployeeFarm
     * const employeeFarm = await prisma.employeeFarm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFarmFindUniqueArgs>(args: SelectSubset<T, EmployeeFarmFindUniqueArgs<ExtArgs>>): Prisma__EmployeeFarmClient<$Result.GetResult<Prisma.$EmployeeFarmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeeFarm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFarmFindUniqueOrThrowArgs} args - Arguments to find a EmployeeFarm
     * @example
     * // Get one EmployeeFarm
     * const employeeFarm = await prisma.employeeFarm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFarmFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFarmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeFarmClient<$Result.GetResult<Prisma.$EmployeeFarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeFarm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFarmFindFirstArgs} args - Arguments to find a EmployeeFarm
     * @example
     * // Get one EmployeeFarm
     * const employeeFarm = await prisma.employeeFarm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFarmFindFirstArgs>(args?: SelectSubset<T, EmployeeFarmFindFirstArgs<ExtArgs>>): Prisma__EmployeeFarmClient<$Result.GetResult<Prisma.$EmployeeFarmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeFarm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFarmFindFirstOrThrowArgs} args - Arguments to find a EmployeeFarm
     * @example
     * // Get one EmployeeFarm
     * const employeeFarm = await prisma.employeeFarm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFarmFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFarmFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeFarmClient<$Result.GetResult<Prisma.$EmployeeFarmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeeFarms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFarmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeFarms
     * const employeeFarms = await prisma.employeeFarm.findMany()
     * 
     * // Get first 10 EmployeeFarms
     * const employeeFarms = await prisma.employeeFarm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeFarmWithIdOnly = await prisma.employeeFarm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFarmFindManyArgs>(args?: SelectSubset<T, EmployeeFarmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeFarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeeFarm.
     * @param {EmployeeFarmCreateArgs} args - Arguments to create a EmployeeFarm.
     * @example
     * // Create one EmployeeFarm
     * const EmployeeFarm = await prisma.employeeFarm.create({
     *   data: {
     *     // ... data to create a EmployeeFarm
     *   }
     * })
     * 
     */
    create<T extends EmployeeFarmCreateArgs>(args: SelectSubset<T, EmployeeFarmCreateArgs<ExtArgs>>): Prisma__EmployeeFarmClient<$Result.GetResult<Prisma.$EmployeeFarmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeeFarms.
     * @param {EmployeeFarmCreateManyArgs} args - Arguments to create many EmployeeFarms.
     * @example
     * // Create many EmployeeFarms
     * const employeeFarm = await prisma.employeeFarm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeFarmCreateManyArgs>(args?: SelectSubset<T, EmployeeFarmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeFarms and returns the data saved in the database.
     * @param {EmployeeFarmCreateManyAndReturnArgs} args - Arguments to create many EmployeeFarms.
     * @example
     * // Create many EmployeeFarms
     * const employeeFarm = await prisma.employeeFarm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeFarms and only return the `id`
     * const employeeFarmWithIdOnly = await prisma.employeeFarm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeFarmCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeFarmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeFarmPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployeeFarm.
     * @param {EmployeeFarmDeleteArgs} args - Arguments to delete one EmployeeFarm.
     * @example
     * // Delete one EmployeeFarm
     * const EmployeeFarm = await prisma.employeeFarm.delete({
     *   where: {
     *     // ... filter to delete one EmployeeFarm
     *   }
     * })
     * 
     */
    delete<T extends EmployeeFarmDeleteArgs>(args: SelectSubset<T, EmployeeFarmDeleteArgs<ExtArgs>>): Prisma__EmployeeFarmClient<$Result.GetResult<Prisma.$EmployeeFarmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeeFarm.
     * @param {EmployeeFarmUpdateArgs} args - Arguments to update one EmployeeFarm.
     * @example
     * // Update one EmployeeFarm
     * const employeeFarm = await prisma.employeeFarm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeFarmUpdateArgs>(args: SelectSubset<T, EmployeeFarmUpdateArgs<ExtArgs>>): Prisma__EmployeeFarmClient<$Result.GetResult<Prisma.$EmployeeFarmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeeFarms.
     * @param {EmployeeFarmDeleteManyArgs} args - Arguments to filter EmployeeFarms to delete.
     * @example
     * // Delete a few EmployeeFarms
     * const { count } = await prisma.employeeFarm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeFarmDeleteManyArgs>(args?: SelectSubset<T, EmployeeFarmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeFarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFarmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeFarms
     * const employeeFarm = await prisma.employeeFarm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeFarmUpdateManyArgs>(args: SelectSubset<T, EmployeeFarmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeFarms and returns the data updated in the database.
     * @param {EmployeeFarmUpdateManyAndReturnArgs} args - Arguments to update many EmployeeFarms.
     * @example
     * // Update many EmployeeFarms
     * const employeeFarm = await prisma.employeeFarm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployeeFarms and only return the `id`
     * const employeeFarmWithIdOnly = await prisma.employeeFarm.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeFarmUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeFarmUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeFarmPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployeeFarm.
     * @param {EmployeeFarmUpsertArgs} args - Arguments to update or create a EmployeeFarm.
     * @example
     * // Update or create a EmployeeFarm
     * const employeeFarm = await prisma.employeeFarm.upsert({
     *   create: {
     *     // ... data to create a EmployeeFarm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeFarm we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeFarmUpsertArgs>(args: SelectSubset<T, EmployeeFarmUpsertArgs<ExtArgs>>): Prisma__EmployeeFarmClient<$Result.GetResult<Prisma.$EmployeeFarmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeeFarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFarmCountArgs} args - Arguments to filter EmployeeFarms to count.
     * @example
     * // Count the number of EmployeeFarms
     * const count = await prisma.employeeFarm.count({
     *   where: {
     *     // ... the filter for the EmployeeFarms we want to count
     *   }
     * })
    **/
    count<T extends EmployeeFarmCountArgs>(
      args?: Subset<T, EmployeeFarmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeFarmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeFarm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFarmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeFarmAggregateArgs>(args: Subset<T, EmployeeFarmAggregateArgs>): Prisma.PrismaPromise<GetEmployeeFarmAggregateType<T>>

    /**
     * Group by EmployeeFarm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFarmGroupByArgs} args - Group by arguments.
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
      T extends EmployeeFarmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeFarmGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeFarmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeFarmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeFarmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeFarm model
   */
  readonly fields: EmployeeFarmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeFarm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeFarmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    farm<T extends FarmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FarmDefaultArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmployeeFarm model
   */
  interface EmployeeFarmFieldRefs {
    readonly id: FieldRef<"EmployeeFarm", 'String'>
    readonly employeeId: FieldRef<"EmployeeFarm", 'String'>
    readonly farmId: FieldRef<"EmployeeFarm", 'String'>
    readonly createdAt: FieldRef<"EmployeeFarm", 'DateTime'>
    readonly updatedAt: FieldRef<"EmployeeFarm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeFarm findUnique
   */
  export type EmployeeFarmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeFarm
     */
    select?: EmployeeFarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeFarm
     */
    omit?: EmployeeFarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeFarmInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeFarm to fetch.
     */
    where: EmployeeFarmWhereUniqueInput
  }

  /**
   * EmployeeFarm findUniqueOrThrow
   */
  export type EmployeeFarmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeFarm
     */
    select?: EmployeeFarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeFarm
     */
    omit?: EmployeeFarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeFarmInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeFarm to fetch.
     */
    where: EmployeeFarmWhereUniqueInput
  }

  /**
   * EmployeeFarm findFirst
   */
  export type EmployeeFarmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeFarm
     */
    select?: EmployeeFarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeFarm
     */
    omit?: EmployeeFarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeFarmInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeFarm to fetch.
     */
    where?: EmployeeFarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeFarms to fetch.
     */
    orderBy?: EmployeeFarmOrderByWithRelationInput | EmployeeFarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeFarms.
     */
    cursor?: EmployeeFarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeFarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeFarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeFarms.
     */
    distinct?: EmployeeFarmScalarFieldEnum | EmployeeFarmScalarFieldEnum[]
  }

  /**
   * EmployeeFarm findFirstOrThrow
   */
  export type EmployeeFarmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeFarm
     */
    select?: EmployeeFarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeFarm
     */
    omit?: EmployeeFarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeFarmInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeFarm to fetch.
     */
    where?: EmployeeFarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeFarms to fetch.
     */
    orderBy?: EmployeeFarmOrderByWithRelationInput | EmployeeFarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeFarms.
     */
    cursor?: EmployeeFarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeFarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeFarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeFarms.
     */
    distinct?: EmployeeFarmScalarFieldEnum | EmployeeFarmScalarFieldEnum[]
  }

  /**
   * EmployeeFarm findMany
   */
  export type EmployeeFarmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeFarm
     */
    select?: EmployeeFarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeFarm
     */
    omit?: EmployeeFarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeFarmInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeFarms to fetch.
     */
    where?: EmployeeFarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeFarms to fetch.
     */
    orderBy?: EmployeeFarmOrderByWithRelationInput | EmployeeFarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeFarms.
     */
    cursor?: EmployeeFarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeFarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeFarms.
     */
    skip?: number
    distinct?: EmployeeFarmScalarFieldEnum | EmployeeFarmScalarFieldEnum[]
  }

  /**
   * EmployeeFarm create
   */
  export type EmployeeFarmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeFarm
     */
    select?: EmployeeFarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeFarm
     */
    omit?: EmployeeFarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeFarmInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeFarm.
     */
    data: XOR<EmployeeFarmCreateInput, EmployeeFarmUncheckedCreateInput>
  }

  /**
   * EmployeeFarm createMany
   */
  export type EmployeeFarmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeFarms.
     */
    data: EmployeeFarmCreateManyInput | EmployeeFarmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeFarm createManyAndReturn
   */
  export type EmployeeFarmCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeFarm
     */
    select?: EmployeeFarmSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeFarm
     */
    omit?: EmployeeFarmOmit<ExtArgs> | null
    /**
     * The data used to create many EmployeeFarms.
     */
    data: EmployeeFarmCreateManyInput | EmployeeFarmCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeFarmIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeFarm update
   */
  export type EmployeeFarmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeFarm
     */
    select?: EmployeeFarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeFarm
     */
    omit?: EmployeeFarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeFarmInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeFarm.
     */
    data: XOR<EmployeeFarmUpdateInput, EmployeeFarmUncheckedUpdateInput>
    /**
     * Choose, which EmployeeFarm to update.
     */
    where: EmployeeFarmWhereUniqueInput
  }

  /**
   * EmployeeFarm updateMany
   */
  export type EmployeeFarmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeFarms.
     */
    data: XOR<EmployeeFarmUpdateManyMutationInput, EmployeeFarmUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeFarms to update
     */
    where?: EmployeeFarmWhereInput
    /**
     * Limit how many EmployeeFarms to update.
     */
    limit?: number
  }

  /**
   * EmployeeFarm updateManyAndReturn
   */
  export type EmployeeFarmUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeFarm
     */
    select?: EmployeeFarmSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeFarm
     */
    omit?: EmployeeFarmOmit<ExtArgs> | null
    /**
     * The data used to update EmployeeFarms.
     */
    data: XOR<EmployeeFarmUpdateManyMutationInput, EmployeeFarmUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeFarms to update
     */
    where?: EmployeeFarmWhereInput
    /**
     * Limit how many EmployeeFarms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeFarmIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeFarm upsert
   */
  export type EmployeeFarmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeFarm
     */
    select?: EmployeeFarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeFarm
     */
    omit?: EmployeeFarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeFarmInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeFarm to update in case it exists.
     */
    where: EmployeeFarmWhereUniqueInput
    /**
     * In case the EmployeeFarm found by the `where` argument doesn't exist, create a new EmployeeFarm with this data.
     */
    create: XOR<EmployeeFarmCreateInput, EmployeeFarmUncheckedCreateInput>
    /**
     * In case the EmployeeFarm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeFarmUpdateInput, EmployeeFarmUncheckedUpdateInput>
  }

  /**
   * EmployeeFarm delete
   */
  export type EmployeeFarmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeFarm
     */
    select?: EmployeeFarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeFarm
     */
    omit?: EmployeeFarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeFarmInclude<ExtArgs> | null
    /**
     * Filter which EmployeeFarm to delete.
     */
    where: EmployeeFarmWhereUniqueInput
  }

  /**
   * EmployeeFarm deleteMany
   */
  export type EmployeeFarmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeFarms to delete
     */
    where?: EmployeeFarmWhereInput
    /**
     * Limit how many EmployeeFarms to delete.
     */
    limit?: number
  }

  /**
   * EmployeeFarm without action
   */
  export type EmployeeFarmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeFarm
     */
    select?: EmployeeFarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeFarm
     */
    omit?: EmployeeFarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeFarmInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeBenefit
   */

  export type AggregateEmployeeBenefit = {
    _count: EmployeeBenefitCountAggregateOutputType | null
    _avg: EmployeeBenefitAvgAggregateOutputType | null
    _sum: EmployeeBenefitSumAggregateOutputType | null
    _min: EmployeeBenefitMinAggregateOutputType | null
    _max: EmployeeBenefitMaxAggregateOutputType | null
  }

  export type EmployeeBenefitAvgAggregateOutputType = {
    amount: number | null
  }

  export type EmployeeBenefitSumAggregateOutputType = {
    amount: number | null
  }

  export type EmployeeBenefitMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    name: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeBenefitMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    name: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeBenefitCountAggregateOutputType = {
    id: number
    employeeId: number
    name: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeBenefitAvgAggregateInputType = {
    amount?: true
  }

  export type EmployeeBenefitSumAggregateInputType = {
    amount?: true
  }

  export type EmployeeBenefitMinAggregateInputType = {
    id?: true
    employeeId?: true
    name?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeBenefitMaxAggregateInputType = {
    id?: true
    employeeId?: true
    name?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeBenefitCountAggregateInputType = {
    id?: true
    employeeId?: true
    name?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeBenefitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeBenefit to aggregate.
     */
    where?: EmployeeBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeBenefits to fetch.
     */
    orderBy?: EmployeeBenefitOrderByWithRelationInput | EmployeeBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeBenefits
    **/
    _count?: true | EmployeeBenefitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeBenefitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeBenefitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeBenefitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeBenefitMaxAggregateInputType
  }

  export type GetEmployeeBenefitAggregateType<T extends EmployeeBenefitAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeBenefit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeBenefit[P]>
      : GetScalarType<T[P], AggregateEmployeeBenefit[P]>
  }




  export type EmployeeBenefitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeBenefitWhereInput
    orderBy?: EmployeeBenefitOrderByWithAggregationInput | EmployeeBenefitOrderByWithAggregationInput[]
    by: EmployeeBenefitScalarFieldEnum[] | EmployeeBenefitScalarFieldEnum
    having?: EmployeeBenefitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeBenefitCountAggregateInputType | true
    _avg?: EmployeeBenefitAvgAggregateInputType
    _sum?: EmployeeBenefitSumAggregateInputType
    _min?: EmployeeBenefitMinAggregateInputType
    _max?: EmployeeBenefitMaxAggregateInputType
  }

  export type EmployeeBenefitGroupByOutputType = {
    id: string
    employeeId: string
    name: string
    amount: number | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeBenefitCountAggregateOutputType | null
    _avg: EmployeeBenefitAvgAggregateOutputType | null
    _sum: EmployeeBenefitSumAggregateOutputType | null
    _min: EmployeeBenefitMinAggregateOutputType | null
    _max: EmployeeBenefitMaxAggregateOutputType | null
  }

  type GetEmployeeBenefitGroupByPayload<T extends EmployeeBenefitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeBenefitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeBenefitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeBenefitGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeBenefitGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeBenefitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    name?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeBenefit"]>

  export type EmployeeBenefitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    name?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeBenefit"]>

  export type EmployeeBenefitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    name?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeBenefit"]>

  export type EmployeeBenefitSelectScalar = {
    id?: boolean
    employeeId?: boolean
    name?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeBenefitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "name" | "amount" | "createdAt" | "updatedAt", ExtArgs["result"]["employeeBenefit"]>
  export type EmployeeBenefitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type EmployeeBenefitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type EmployeeBenefitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $EmployeeBenefitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeBenefit"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      name: string
      amount: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employeeBenefit"]>
    composites: {}
  }

  type EmployeeBenefitGetPayload<S extends boolean | null | undefined | EmployeeBenefitDefaultArgs> = $Result.GetResult<Prisma.$EmployeeBenefitPayload, S>

  type EmployeeBenefitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeBenefitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeBenefitCountAggregateInputType | true
    }

  export interface EmployeeBenefitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeBenefit'], meta: { name: 'EmployeeBenefit' } }
    /**
     * Find zero or one EmployeeBenefit that matches the filter.
     * @param {EmployeeBenefitFindUniqueArgs} args - Arguments to find a EmployeeBenefit
     * @example
     * // Get one EmployeeBenefit
     * const employeeBenefit = await prisma.employeeBenefit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeBenefitFindUniqueArgs>(args: SelectSubset<T, EmployeeBenefitFindUniqueArgs<ExtArgs>>): Prisma__EmployeeBenefitClient<$Result.GetResult<Prisma.$EmployeeBenefitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeeBenefit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeBenefitFindUniqueOrThrowArgs} args - Arguments to find a EmployeeBenefit
     * @example
     * // Get one EmployeeBenefit
     * const employeeBenefit = await prisma.employeeBenefit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeBenefitFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeBenefitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeBenefitClient<$Result.GetResult<Prisma.$EmployeeBenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeBenefit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeBenefitFindFirstArgs} args - Arguments to find a EmployeeBenefit
     * @example
     * // Get one EmployeeBenefit
     * const employeeBenefit = await prisma.employeeBenefit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeBenefitFindFirstArgs>(args?: SelectSubset<T, EmployeeBenefitFindFirstArgs<ExtArgs>>): Prisma__EmployeeBenefitClient<$Result.GetResult<Prisma.$EmployeeBenefitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeBenefit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeBenefitFindFirstOrThrowArgs} args - Arguments to find a EmployeeBenefit
     * @example
     * // Get one EmployeeBenefit
     * const employeeBenefit = await prisma.employeeBenefit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeBenefitFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeBenefitFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeBenefitClient<$Result.GetResult<Prisma.$EmployeeBenefitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeeBenefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeBenefitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeBenefits
     * const employeeBenefits = await prisma.employeeBenefit.findMany()
     * 
     * // Get first 10 EmployeeBenefits
     * const employeeBenefits = await prisma.employeeBenefit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeBenefitWithIdOnly = await prisma.employeeBenefit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeBenefitFindManyArgs>(args?: SelectSubset<T, EmployeeBenefitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeBenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeeBenefit.
     * @param {EmployeeBenefitCreateArgs} args - Arguments to create a EmployeeBenefit.
     * @example
     * // Create one EmployeeBenefit
     * const EmployeeBenefit = await prisma.employeeBenefit.create({
     *   data: {
     *     // ... data to create a EmployeeBenefit
     *   }
     * })
     * 
     */
    create<T extends EmployeeBenefitCreateArgs>(args: SelectSubset<T, EmployeeBenefitCreateArgs<ExtArgs>>): Prisma__EmployeeBenefitClient<$Result.GetResult<Prisma.$EmployeeBenefitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeeBenefits.
     * @param {EmployeeBenefitCreateManyArgs} args - Arguments to create many EmployeeBenefits.
     * @example
     * // Create many EmployeeBenefits
     * const employeeBenefit = await prisma.employeeBenefit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeBenefitCreateManyArgs>(args?: SelectSubset<T, EmployeeBenefitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeBenefits and returns the data saved in the database.
     * @param {EmployeeBenefitCreateManyAndReturnArgs} args - Arguments to create many EmployeeBenefits.
     * @example
     * // Create many EmployeeBenefits
     * const employeeBenefit = await prisma.employeeBenefit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeBenefits and only return the `id`
     * const employeeBenefitWithIdOnly = await prisma.employeeBenefit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeBenefitCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeBenefitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeBenefitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployeeBenefit.
     * @param {EmployeeBenefitDeleteArgs} args - Arguments to delete one EmployeeBenefit.
     * @example
     * // Delete one EmployeeBenefit
     * const EmployeeBenefit = await prisma.employeeBenefit.delete({
     *   where: {
     *     // ... filter to delete one EmployeeBenefit
     *   }
     * })
     * 
     */
    delete<T extends EmployeeBenefitDeleteArgs>(args: SelectSubset<T, EmployeeBenefitDeleteArgs<ExtArgs>>): Prisma__EmployeeBenefitClient<$Result.GetResult<Prisma.$EmployeeBenefitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeeBenefit.
     * @param {EmployeeBenefitUpdateArgs} args - Arguments to update one EmployeeBenefit.
     * @example
     * // Update one EmployeeBenefit
     * const employeeBenefit = await prisma.employeeBenefit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeBenefitUpdateArgs>(args: SelectSubset<T, EmployeeBenefitUpdateArgs<ExtArgs>>): Prisma__EmployeeBenefitClient<$Result.GetResult<Prisma.$EmployeeBenefitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeeBenefits.
     * @param {EmployeeBenefitDeleteManyArgs} args - Arguments to filter EmployeeBenefits to delete.
     * @example
     * // Delete a few EmployeeBenefits
     * const { count } = await prisma.employeeBenefit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeBenefitDeleteManyArgs>(args?: SelectSubset<T, EmployeeBenefitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeBenefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeBenefitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeBenefits
     * const employeeBenefit = await prisma.employeeBenefit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeBenefitUpdateManyArgs>(args: SelectSubset<T, EmployeeBenefitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeBenefits and returns the data updated in the database.
     * @param {EmployeeBenefitUpdateManyAndReturnArgs} args - Arguments to update many EmployeeBenefits.
     * @example
     * // Update many EmployeeBenefits
     * const employeeBenefit = await prisma.employeeBenefit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployeeBenefits and only return the `id`
     * const employeeBenefitWithIdOnly = await prisma.employeeBenefit.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeBenefitUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeBenefitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeBenefitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployeeBenefit.
     * @param {EmployeeBenefitUpsertArgs} args - Arguments to update or create a EmployeeBenefit.
     * @example
     * // Update or create a EmployeeBenefit
     * const employeeBenefit = await prisma.employeeBenefit.upsert({
     *   create: {
     *     // ... data to create a EmployeeBenefit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeBenefit we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeBenefitUpsertArgs>(args: SelectSubset<T, EmployeeBenefitUpsertArgs<ExtArgs>>): Prisma__EmployeeBenefitClient<$Result.GetResult<Prisma.$EmployeeBenefitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeeBenefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeBenefitCountArgs} args - Arguments to filter EmployeeBenefits to count.
     * @example
     * // Count the number of EmployeeBenefits
     * const count = await prisma.employeeBenefit.count({
     *   where: {
     *     // ... the filter for the EmployeeBenefits we want to count
     *   }
     * })
    **/
    count<T extends EmployeeBenefitCountArgs>(
      args?: Subset<T, EmployeeBenefitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeBenefitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeBenefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeBenefitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeBenefitAggregateArgs>(args: Subset<T, EmployeeBenefitAggregateArgs>): Prisma.PrismaPromise<GetEmployeeBenefitAggregateType<T>>

    /**
     * Group by EmployeeBenefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeBenefitGroupByArgs} args - Group by arguments.
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
      T extends EmployeeBenefitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeBenefitGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeBenefitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeBenefitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeBenefitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeBenefit model
   */
  readonly fields: EmployeeBenefitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeBenefit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeBenefitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmployeeBenefit model
   */
  interface EmployeeBenefitFieldRefs {
    readonly id: FieldRef<"EmployeeBenefit", 'String'>
    readonly employeeId: FieldRef<"EmployeeBenefit", 'String'>
    readonly name: FieldRef<"EmployeeBenefit", 'String'>
    readonly amount: FieldRef<"EmployeeBenefit", 'Float'>
    readonly createdAt: FieldRef<"EmployeeBenefit", 'DateTime'>
    readonly updatedAt: FieldRef<"EmployeeBenefit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeBenefit findUnique
   */
  export type EmployeeBenefitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeBenefit
     */
    select?: EmployeeBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeBenefit
     */
    omit?: EmployeeBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeBenefitInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeBenefit to fetch.
     */
    where: EmployeeBenefitWhereUniqueInput
  }

  /**
   * EmployeeBenefit findUniqueOrThrow
   */
  export type EmployeeBenefitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeBenefit
     */
    select?: EmployeeBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeBenefit
     */
    omit?: EmployeeBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeBenefitInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeBenefit to fetch.
     */
    where: EmployeeBenefitWhereUniqueInput
  }

  /**
   * EmployeeBenefit findFirst
   */
  export type EmployeeBenefitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeBenefit
     */
    select?: EmployeeBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeBenefit
     */
    omit?: EmployeeBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeBenefitInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeBenefit to fetch.
     */
    where?: EmployeeBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeBenefits to fetch.
     */
    orderBy?: EmployeeBenefitOrderByWithRelationInput | EmployeeBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeBenefits.
     */
    cursor?: EmployeeBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeBenefits.
     */
    distinct?: EmployeeBenefitScalarFieldEnum | EmployeeBenefitScalarFieldEnum[]
  }

  /**
   * EmployeeBenefit findFirstOrThrow
   */
  export type EmployeeBenefitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeBenefit
     */
    select?: EmployeeBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeBenefit
     */
    omit?: EmployeeBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeBenefitInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeBenefit to fetch.
     */
    where?: EmployeeBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeBenefits to fetch.
     */
    orderBy?: EmployeeBenefitOrderByWithRelationInput | EmployeeBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeBenefits.
     */
    cursor?: EmployeeBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeBenefits.
     */
    distinct?: EmployeeBenefitScalarFieldEnum | EmployeeBenefitScalarFieldEnum[]
  }

  /**
   * EmployeeBenefit findMany
   */
  export type EmployeeBenefitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeBenefit
     */
    select?: EmployeeBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeBenefit
     */
    omit?: EmployeeBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeBenefitInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeBenefits to fetch.
     */
    where?: EmployeeBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeBenefits to fetch.
     */
    orderBy?: EmployeeBenefitOrderByWithRelationInput | EmployeeBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeBenefits.
     */
    cursor?: EmployeeBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeBenefits.
     */
    skip?: number
    distinct?: EmployeeBenefitScalarFieldEnum | EmployeeBenefitScalarFieldEnum[]
  }

  /**
   * EmployeeBenefit create
   */
  export type EmployeeBenefitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeBenefit
     */
    select?: EmployeeBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeBenefit
     */
    omit?: EmployeeBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeBenefitInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeBenefit.
     */
    data: XOR<EmployeeBenefitCreateInput, EmployeeBenefitUncheckedCreateInput>
  }

  /**
   * EmployeeBenefit createMany
   */
  export type EmployeeBenefitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeBenefits.
     */
    data: EmployeeBenefitCreateManyInput | EmployeeBenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeBenefit createManyAndReturn
   */
  export type EmployeeBenefitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeBenefit
     */
    select?: EmployeeBenefitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeBenefit
     */
    omit?: EmployeeBenefitOmit<ExtArgs> | null
    /**
     * The data used to create many EmployeeBenefits.
     */
    data: EmployeeBenefitCreateManyInput | EmployeeBenefitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeBenefitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeBenefit update
   */
  export type EmployeeBenefitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeBenefit
     */
    select?: EmployeeBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeBenefit
     */
    omit?: EmployeeBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeBenefitInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeBenefit.
     */
    data: XOR<EmployeeBenefitUpdateInput, EmployeeBenefitUncheckedUpdateInput>
    /**
     * Choose, which EmployeeBenefit to update.
     */
    where: EmployeeBenefitWhereUniqueInput
  }

  /**
   * EmployeeBenefit updateMany
   */
  export type EmployeeBenefitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeBenefits.
     */
    data: XOR<EmployeeBenefitUpdateManyMutationInput, EmployeeBenefitUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeBenefits to update
     */
    where?: EmployeeBenefitWhereInput
    /**
     * Limit how many EmployeeBenefits to update.
     */
    limit?: number
  }

  /**
   * EmployeeBenefit updateManyAndReturn
   */
  export type EmployeeBenefitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeBenefit
     */
    select?: EmployeeBenefitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeBenefit
     */
    omit?: EmployeeBenefitOmit<ExtArgs> | null
    /**
     * The data used to update EmployeeBenefits.
     */
    data: XOR<EmployeeBenefitUpdateManyMutationInput, EmployeeBenefitUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeBenefits to update
     */
    where?: EmployeeBenefitWhereInput
    /**
     * Limit how many EmployeeBenefits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeBenefitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeBenefit upsert
   */
  export type EmployeeBenefitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeBenefit
     */
    select?: EmployeeBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeBenefit
     */
    omit?: EmployeeBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeBenefitInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeBenefit to update in case it exists.
     */
    where: EmployeeBenefitWhereUniqueInput
    /**
     * In case the EmployeeBenefit found by the `where` argument doesn't exist, create a new EmployeeBenefit with this data.
     */
    create: XOR<EmployeeBenefitCreateInput, EmployeeBenefitUncheckedCreateInput>
    /**
     * In case the EmployeeBenefit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeBenefitUpdateInput, EmployeeBenefitUncheckedUpdateInput>
  }

  /**
   * EmployeeBenefit delete
   */
  export type EmployeeBenefitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeBenefit
     */
    select?: EmployeeBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeBenefit
     */
    omit?: EmployeeBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeBenefitInclude<ExtArgs> | null
    /**
     * Filter which EmployeeBenefit to delete.
     */
    where: EmployeeBenefitWhereUniqueInput
  }

  /**
   * EmployeeBenefit deleteMany
   */
  export type EmployeeBenefitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeBenefits to delete
     */
    where?: EmployeeBenefitWhereInput
    /**
     * Limit how many EmployeeBenefits to delete.
     */
    limit?: number
  }

  /**
   * EmployeeBenefit without action
   */
  export type EmployeeBenefitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeBenefit
     */
    select?: EmployeeBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeBenefit
     */
    omit?: EmployeeBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeBenefitInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    gender: 'gender',
    dob: 'dob',
    residenceCounty: 'residenceCounty',
    residenceLocation: 'residenceLocation',
    email: 'email',
    phoneNumber: 'phoneNumber',
    businessNumber: 'businessNumber',
    pin: 'pin',
    yearsOfExperience: 'yearsOfExperience',
    otp: 'otp',
    otpExpiry: 'otpExpiry',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FarmScalarFieldEnum: {
    id: 'id',
    name: 'name',
    county: 'county',
    administrativeLocation: 'administrativeLocation',
    size: 'size',
    ownership: 'ownership',
    farmingTypes: 'farmingTypes',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FarmScalarFieldEnum = (typeof FarmScalarFieldEnum)[keyof typeof FarmScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    phone: 'phone',
    emergencyContact: 'emergencyContact',
    idNumber: 'idNumber',
    idPhoto: 'idPhoto',
    employeeType: 'employeeType',
    dateOfEmployment: 'dateOfEmployment',
    endDate: 'endDate',
    role: 'role',
    customRole: 'customRole',
    paymentSchedule: 'paymentSchedule',
    salary: 'salary',
    typeOfEngagement: 'typeOfEngagement',
    workSchedule: 'workSchedule',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const EmployeeFarmScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    farmId: 'farmId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeFarmScalarFieldEnum = (typeof EmployeeFarmScalarFieldEnum)[keyof typeof EmployeeFarmScalarFieldEnum]


  export const EmployeeBenefitScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    name: 'name',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeBenefitScalarFieldEnum = (typeof EmployeeBenefitScalarFieldEnum)[keyof typeof EmployeeBenefitScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    dob?: StringFilter<"User"> | string
    residenceCounty?: StringFilter<"User"> | string
    residenceLocation?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringFilter<"User"> | string
    businessNumber?: StringNullableFilter<"User"> | string | null
    pin?: StringFilter<"User"> | string
    yearsOfExperience?: IntNullableFilter<"User"> | number | null
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    farms?: FarmListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    residenceCounty?: SortOrder
    residenceLocation?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    businessNumber?: SortOrderInput | SortOrder
    pin?: SortOrder
    yearsOfExperience?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farms?: FarmOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    dob?: StringFilter<"User"> | string
    residenceCounty?: StringFilter<"User"> | string
    residenceLocation?: StringNullableFilter<"User"> | string | null
    businessNumber?: StringNullableFilter<"User"> | string | null
    pin?: StringFilter<"User"> | string
    yearsOfExperience?: IntNullableFilter<"User"> | number | null
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    farms?: FarmListRelationFilter
  }, "id" | "email" | "phoneNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    residenceCounty?: SortOrder
    residenceLocation?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    businessNumber?: SortOrderInput | SortOrder
    pin?: SortOrder
    yearsOfExperience?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    middleName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringWithAggregatesFilter<"User"> | string
    gender?: StringWithAggregatesFilter<"User"> | string
    dob?: StringWithAggregatesFilter<"User"> | string
    residenceCounty?: StringWithAggregatesFilter<"User"> | string
    residenceLocation?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    businessNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    pin?: StringWithAggregatesFilter<"User"> | string
    yearsOfExperience?: IntNullableWithAggregatesFilter<"User"> | number | null
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FarmWhereInput = {
    AND?: FarmWhereInput | FarmWhereInput[]
    OR?: FarmWhereInput[]
    NOT?: FarmWhereInput | FarmWhereInput[]
    id?: StringFilter<"Farm"> | string
    name?: StringFilter<"Farm"> | string
    county?: StringFilter<"Farm"> | string
    administrativeLocation?: StringFilter<"Farm"> | string
    size?: FloatFilter<"Farm"> | number
    ownership?: StringFilter<"Farm"> | string
    farmingTypes?: StringNullableListFilter<"Farm">
    userId?: StringFilter<"Farm"> | string
    createdAt?: DateTimeFilter<"Farm"> | Date | string
    updatedAt?: DateTimeFilter<"Farm"> | Date | string
    employees?: EmployeeFarmListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FarmOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    county?: SortOrder
    administrativeLocation?: SortOrder
    size?: SortOrder
    ownership?: SortOrder
    farmingTypes?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employees?: EmployeeFarmOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type FarmWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FarmWhereInput | FarmWhereInput[]
    OR?: FarmWhereInput[]
    NOT?: FarmWhereInput | FarmWhereInput[]
    name?: StringFilter<"Farm"> | string
    county?: StringFilter<"Farm"> | string
    administrativeLocation?: StringFilter<"Farm"> | string
    size?: FloatFilter<"Farm"> | number
    ownership?: StringFilter<"Farm"> | string
    farmingTypes?: StringNullableListFilter<"Farm">
    userId?: StringFilter<"Farm"> | string
    createdAt?: DateTimeFilter<"Farm"> | Date | string
    updatedAt?: DateTimeFilter<"Farm"> | Date | string
    employees?: EmployeeFarmListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FarmOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    county?: SortOrder
    administrativeLocation?: SortOrder
    size?: SortOrder
    ownership?: SortOrder
    farmingTypes?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FarmCountOrderByAggregateInput
    _avg?: FarmAvgOrderByAggregateInput
    _max?: FarmMaxOrderByAggregateInput
    _min?: FarmMinOrderByAggregateInput
    _sum?: FarmSumOrderByAggregateInput
  }

  export type FarmScalarWhereWithAggregatesInput = {
    AND?: FarmScalarWhereWithAggregatesInput | FarmScalarWhereWithAggregatesInput[]
    OR?: FarmScalarWhereWithAggregatesInput[]
    NOT?: FarmScalarWhereWithAggregatesInput | FarmScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Farm"> | string
    name?: StringWithAggregatesFilter<"Farm"> | string
    county?: StringWithAggregatesFilter<"Farm"> | string
    administrativeLocation?: StringWithAggregatesFilter<"Farm"> | string
    size?: FloatWithAggregatesFilter<"Farm"> | number
    ownership?: StringWithAggregatesFilter<"Farm"> | string
    farmingTypes?: StringNullableListFilter<"Farm">
    userId?: StringWithAggregatesFilter<"Farm"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Farm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Farm"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    firstName?: StringFilter<"Employee"> | string
    middleName?: StringNullableFilter<"Employee"> | string | null
    lastName?: StringFilter<"Employee"> | string
    phone?: StringFilter<"Employee"> | string
    emergencyContact?: StringNullableFilter<"Employee"> | string | null
    idNumber?: StringFilter<"Employee"> | string
    idPhoto?: StringNullableFilter<"Employee"> | string | null
    employeeType?: StringFilter<"Employee"> | string
    dateOfEmployment?: DateTimeFilter<"Employee"> | Date | string
    endDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    role?: StringFilter<"Employee"> | string
    customRole?: StringNullableFilter<"Employee"> | string | null
    paymentSchedule?: StringFilter<"Employee"> | string
    salary?: FloatFilter<"Employee"> | number
    typeOfEngagement?: StringNullableFilter<"Employee"> | string | null
    workSchedule?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    benefits?: EmployeeBenefitListRelationFilter
    farms?: EmployeeFarmListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    idNumber?: SortOrder
    idPhoto?: SortOrderInput | SortOrder
    employeeType?: SortOrder
    dateOfEmployment?: SortOrder
    endDate?: SortOrderInput | SortOrder
    role?: SortOrder
    customRole?: SortOrderInput | SortOrder
    paymentSchedule?: SortOrder
    salary?: SortOrder
    typeOfEngagement?: SortOrderInput | SortOrder
    workSchedule?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    benefits?: EmployeeBenefitOrderByRelationAggregateInput
    farms?: EmployeeFarmOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    idNumber?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    firstName?: StringFilter<"Employee"> | string
    middleName?: StringNullableFilter<"Employee"> | string | null
    lastName?: StringFilter<"Employee"> | string
    phone?: StringFilter<"Employee"> | string
    emergencyContact?: StringNullableFilter<"Employee"> | string | null
    idPhoto?: StringNullableFilter<"Employee"> | string | null
    employeeType?: StringFilter<"Employee"> | string
    dateOfEmployment?: DateTimeFilter<"Employee"> | Date | string
    endDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    role?: StringFilter<"Employee"> | string
    customRole?: StringNullableFilter<"Employee"> | string | null
    paymentSchedule?: StringFilter<"Employee"> | string
    salary?: FloatFilter<"Employee"> | number
    typeOfEngagement?: StringNullableFilter<"Employee"> | string | null
    workSchedule?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    benefits?: EmployeeBenefitListRelationFilter
    farms?: EmployeeFarmListRelationFilter
  }, "id" | "idNumber">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    idNumber?: SortOrder
    idPhoto?: SortOrderInput | SortOrder
    employeeType?: SortOrder
    dateOfEmployment?: SortOrder
    endDate?: SortOrderInput | SortOrder
    role?: SortOrder
    customRole?: SortOrderInput | SortOrder
    paymentSchedule?: SortOrder
    salary?: SortOrder
    typeOfEngagement?: SortOrderInput | SortOrder
    workSchedule?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    firstName?: StringWithAggregatesFilter<"Employee"> | string
    middleName?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    lastName?: StringWithAggregatesFilter<"Employee"> | string
    phone?: StringWithAggregatesFilter<"Employee"> | string
    emergencyContact?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    idNumber?: StringWithAggregatesFilter<"Employee"> | string
    idPhoto?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    employeeType?: StringWithAggregatesFilter<"Employee"> | string
    dateOfEmployment?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    role?: StringWithAggregatesFilter<"Employee"> | string
    customRole?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    paymentSchedule?: StringWithAggregatesFilter<"Employee"> | string
    salary?: FloatWithAggregatesFilter<"Employee"> | number
    typeOfEngagement?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    workSchedule?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type EmployeeFarmWhereInput = {
    AND?: EmployeeFarmWhereInput | EmployeeFarmWhereInput[]
    OR?: EmployeeFarmWhereInput[]
    NOT?: EmployeeFarmWhereInput | EmployeeFarmWhereInput[]
    id?: StringFilter<"EmployeeFarm"> | string
    employeeId?: StringFilter<"EmployeeFarm"> | string
    farmId?: StringFilter<"EmployeeFarm"> | string
    createdAt?: DateTimeFilter<"EmployeeFarm"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeFarm"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    farm?: XOR<FarmScalarRelationFilter, FarmWhereInput>
  }

  export type EmployeeFarmOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    farmId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    farm?: FarmOrderByWithRelationInput
  }

  export type EmployeeFarmWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeId_farmId?: EmployeeFarmEmployeeIdFarmIdCompoundUniqueInput
    AND?: EmployeeFarmWhereInput | EmployeeFarmWhereInput[]
    OR?: EmployeeFarmWhereInput[]
    NOT?: EmployeeFarmWhereInput | EmployeeFarmWhereInput[]
    employeeId?: StringFilter<"EmployeeFarm"> | string
    farmId?: StringFilter<"EmployeeFarm"> | string
    createdAt?: DateTimeFilter<"EmployeeFarm"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeFarm"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    farm?: XOR<FarmScalarRelationFilter, FarmWhereInput>
  }, "id" | "employeeId_farmId">

  export type EmployeeFarmOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    farmId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeFarmCountOrderByAggregateInput
    _max?: EmployeeFarmMaxOrderByAggregateInput
    _min?: EmployeeFarmMinOrderByAggregateInput
  }

  export type EmployeeFarmScalarWhereWithAggregatesInput = {
    AND?: EmployeeFarmScalarWhereWithAggregatesInput | EmployeeFarmScalarWhereWithAggregatesInput[]
    OR?: EmployeeFarmScalarWhereWithAggregatesInput[]
    NOT?: EmployeeFarmScalarWhereWithAggregatesInput | EmployeeFarmScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmployeeFarm"> | string
    employeeId?: StringWithAggregatesFilter<"EmployeeFarm"> | string
    farmId?: StringWithAggregatesFilter<"EmployeeFarm"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EmployeeFarm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmployeeFarm"> | Date | string
  }

  export type EmployeeBenefitWhereInput = {
    AND?: EmployeeBenefitWhereInput | EmployeeBenefitWhereInput[]
    OR?: EmployeeBenefitWhereInput[]
    NOT?: EmployeeBenefitWhereInput | EmployeeBenefitWhereInput[]
    id?: StringFilter<"EmployeeBenefit"> | string
    employeeId?: StringFilter<"EmployeeBenefit"> | string
    name?: StringFilter<"EmployeeBenefit"> | string
    amount?: FloatNullableFilter<"EmployeeBenefit"> | number | null
    createdAt?: DateTimeFilter<"EmployeeBenefit"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeBenefit"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type EmployeeBenefitOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    amount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type EmployeeBenefitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeId_name?: EmployeeBenefitEmployeeIdNameCompoundUniqueInput
    AND?: EmployeeBenefitWhereInput | EmployeeBenefitWhereInput[]
    OR?: EmployeeBenefitWhereInput[]
    NOT?: EmployeeBenefitWhereInput | EmployeeBenefitWhereInput[]
    employeeId?: StringFilter<"EmployeeBenefit"> | string
    name?: StringFilter<"EmployeeBenefit"> | string
    amount?: FloatNullableFilter<"EmployeeBenefit"> | number | null
    createdAt?: DateTimeFilter<"EmployeeBenefit"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeBenefit"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id" | "employeeId_name">

  export type EmployeeBenefitOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    amount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeBenefitCountOrderByAggregateInput
    _avg?: EmployeeBenefitAvgOrderByAggregateInput
    _max?: EmployeeBenefitMaxOrderByAggregateInput
    _min?: EmployeeBenefitMinOrderByAggregateInput
    _sum?: EmployeeBenefitSumOrderByAggregateInput
  }

  export type EmployeeBenefitScalarWhereWithAggregatesInput = {
    AND?: EmployeeBenefitScalarWhereWithAggregatesInput | EmployeeBenefitScalarWhereWithAggregatesInput[]
    OR?: EmployeeBenefitScalarWhereWithAggregatesInput[]
    NOT?: EmployeeBenefitScalarWhereWithAggregatesInput | EmployeeBenefitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmployeeBenefit"> | string
    employeeId?: StringWithAggregatesFilter<"EmployeeBenefit"> | string
    name?: StringWithAggregatesFilter<"EmployeeBenefit"> | string
    amount?: FloatNullableWithAggregatesFilter<"EmployeeBenefit"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"EmployeeBenefit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmployeeBenefit"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    gender: string
    dob: string
    residenceCounty: string
    residenceLocation?: string | null
    email?: string | null
    phoneNumber: string
    businessNumber?: string | null
    pin: string
    yearsOfExperience?: number | null
    otp?: string | null
    otpExpiry?: Date | string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farms?: FarmCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    gender: string
    dob: string
    residenceCounty: string
    residenceLocation?: string | null
    email?: string | null
    phoneNumber: string
    businessNumber?: string | null
    pin: string
    yearsOfExperience?: number | null
    otp?: string | null
    otpExpiry?: Date | string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farms?: FarmUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    residenceCounty?: StringFieldUpdateOperationsInput | string
    residenceLocation?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    businessNumber?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: StringFieldUpdateOperationsInput | string
    yearsOfExperience?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farms?: FarmUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    residenceCounty?: StringFieldUpdateOperationsInput | string
    residenceLocation?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    businessNumber?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: StringFieldUpdateOperationsInput | string
    yearsOfExperience?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farms?: FarmUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    gender: string
    dob: string
    residenceCounty: string
    residenceLocation?: string | null
    email?: string | null
    phoneNumber: string
    businessNumber?: string | null
    pin: string
    yearsOfExperience?: number | null
    otp?: string | null
    otpExpiry?: Date | string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    residenceCounty?: StringFieldUpdateOperationsInput | string
    residenceLocation?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    businessNumber?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: StringFieldUpdateOperationsInput | string
    yearsOfExperience?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    residenceCounty?: StringFieldUpdateOperationsInput | string
    residenceLocation?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    businessNumber?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: StringFieldUpdateOperationsInput | string
    yearsOfExperience?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmCreateInput = {
    id?: string
    name: string
    county: string
    administrativeLocation: string
    size: number
    ownership: string
    farmingTypes?: FarmCreatefarmingTypesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeFarmCreateNestedManyWithoutFarmInput
    user: UserCreateNestedOneWithoutFarmsInput
  }

  export type FarmUncheckedCreateInput = {
    id?: string
    name: string
    county: string
    administrativeLocation: string
    size: number
    ownership: string
    farmingTypes?: FarmCreatefarmingTypesInput | string[]
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeFarmUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    administrativeLocation?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    ownership?: StringFieldUpdateOperationsInput | string
    farmingTypes?: FarmUpdatefarmingTypesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeFarmUpdateManyWithoutFarmNestedInput
    user?: UserUpdateOneRequiredWithoutFarmsNestedInput
  }

  export type FarmUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    administrativeLocation?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    ownership?: StringFieldUpdateOperationsInput | string
    farmingTypes?: FarmUpdatefarmingTypesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeFarmUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type FarmCreateManyInput = {
    id?: string
    name: string
    county: string
    administrativeLocation: string
    size: number
    ownership: string
    farmingTypes?: FarmCreatefarmingTypesInput | string[]
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    administrativeLocation?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    ownership?: StringFieldUpdateOperationsInput | string
    farmingTypes?: FarmUpdatefarmingTypesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    administrativeLocation?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    ownership?: StringFieldUpdateOperationsInput | string
    farmingTypes?: FarmUpdatefarmingTypesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    phone: string
    emergencyContact?: string | null
    idNumber: string
    idPhoto?: string | null
    employeeType: string
    dateOfEmployment: Date | string
    endDate?: Date | string | null
    role: string
    customRole?: string | null
    paymentSchedule: string
    salary: number
    typeOfEngagement?: string | null
    workSchedule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: EmployeeBenefitCreateNestedManyWithoutEmployeeInput
    farms?: EmployeeFarmCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    phone: string
    emergencyContact?: string | null
    idNumber: string
    idPhoto?: string | null
    employeeType: string
    dateOfEmployment: Date | string
    endDate?: Date | string | null
    role: string
    customRole?: string | null
    paymentSchedule: string
    salary: number
    typeOfEngagement?: string | null
    workSchedule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: EmployeeBenefitUncheckedCreateNestedManyWithoutEmployeeInput
    farms?: EmployeeFarmUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: StringFieldUpdateOperationsInput | string
    idPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    employeeType?: StringFieldUpdateOperationsInput | string
    dateOfEmployment?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    customRole?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSchedule?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    typeOfEngagement?: NullableStringFieldUpdateOperationsInput | string | null
    workSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: EmployeeBenefitUpdateManyWithoutEmployeeNestedInput
    farms?: EmployeeFarmUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: StringFieldUpdateOperationsInput | string
    idPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    employeeType?: StringFieldUpdateOperationsInput | string
    dateOfEmployment?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    customRole?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSchedule?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    typeOfEngagement?: NullableStringFieldUpdateOperationsInput | string | null
    workSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: EmployeeBenefitUncheckedUpdateManyWithoutEmployeeNestedInput
    farms?: EmployeeFarmUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    phone: string
    emergencyContact?: string | null
    idNumber: string
    idPhoto?: string | null
    employeeType: string
    dateOfEmployment: Date | string
    endDate?: Date | string | null
    role: string
    customRole?: string | null
    paymentSchedule: string
    salary: number
    typeOfEngagement?: string | null
    workSchedule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: StringFieldUpdateOperationsInput | string
    idPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    employeeType?: StringFieldUpdateOperationsInput | string
    dateOfEmployment?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    customRole?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSchedule?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    typeOfEngagement?: NullableStringFieldUpdateOperationsInput | string | null
    workSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: StringFieldUpdateOperationsInput | string
    idPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    employeeType?: StringFieldUpdateOperationsInput | string
    dateOfEmployment?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    customRole?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSchedule?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    typeOfEngagement?: NullableStringFieldUpdateOperationsInput | string | null
    workSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeFarmCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutFarmsInput
    farm: FarmCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeFarmUncheckedCreateInput = {
    id?: string
    employeeId: string
    farmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeFarmUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutFarmsNestedInput
    farm?: FarmUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EmployeeFarmUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    farmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeFarmCreateManyInput = {
    id?: string
    employeeId: string
    farmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeFarmUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeFarmUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    farmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeBenefitCreateInput = {
    id?: string
    name: string
    amount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutBenefitsInput
  }

  export type EmployeeBenefitUncheckedCreateInput = {
    id?: string
    employeeId: string
    name: string
    amount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeBenefitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutBenefitsNestedInput
  }

  export type EmployeeBenefitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeBenefitCreateManyInput = {
    id?: string
    employeeId: string
    name: string
    amount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeBenefitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeBenefitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FarmListRelationFilter = {
    every?: FarmWhereInput
    some?: FarmWhereInput
    none?: FarmWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FarmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    residenceCounty?: SortOrder
    residenceLocation?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    businessNumber?: SortOrder
    pin?: SortOrder
    yearsOfExperience?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    yearsOfExperience?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    residenceCounty?: SortOrder
    residenceLocation?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    businessNumber?: SortOrder
    pin?: SortOrder
    yearsOfExperience?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    residenceCounty?: SortOrder
    residenceLocation?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    businessNumber?: SortOrder
    pin?: SortOrder
    yearsOfExperience?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    yearsOfExperience?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EmployeeFarmListRelationFilter = {
    every?: EmployeeFarmWhereInput
    some?: EmployeeFarmWhereInput
    none?: EmployeeFarmWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmployeeFarmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FarmCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    county?: SortOrder
    administrativeLocation?: SortOrder
    size?: SortOrder
    ownership?: SortOrder
    farmingTypes?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type FarmMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    county?: SortOrder
    administrativeLocation?: SortOrder
    size?: SortOrder
    ownership?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    county?: SortOrder
    administrativeLocation?: SortOrder
    size?: SortOrder
    ownership?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EmployeeBenefitListRelationFilter = {
    every?: EmployeeBenefitWhereInput
    some?: EmployeeBenefitWhereInput
    none?: EmployeeBenefitWhereInput
  }

  export type EmployeeBenefitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    emergencyContact?: SortOrder
    idNumber?: SortOrder
    idPhoto?: SortOrder
    employeeType?: SortOrder
    dateOfEmployment?: SortOrder
    endDate?: SortOrder
    role?: SortOrder
    customRole?: SortOrder
    paymentSchedule?: SortOrder
    salary?: SortOrder
    typeOfEngagement?: SortOrder
    workSchedule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    emergencyContact?: SortOrder
    idNumber?: SortOrder
    idPhoto?: SortOrder
    employeeType?: SortOrder
    dateOfEmployment?: SortOrder
    endDate?: SortOrder
    role?: SortOrder
    customRole?: SortOrder
    paymentSchedule?: SortOrder
    salary?: SortOrder
    typeOfEngagement?: SortOrder
    workSchedule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    emergencyContact?: SortOrder
    idNumber?: SortOrder
    idPhoto?: SortOrder
    employeeType?: SortOrder
    dateOfEmployment?: SortOrder
    endDate?: SortOrder
    role?: SortOrder
    customRole?: SortOrder
    paymentSchedule?: SortOrder
    salary?: SortOrder
    typeOfEngagement?: SortOrder
    workSchedule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type FarmScalarRelationFilter = {
    is?: FarmWhereInput
    isNot?: FarmWhereInput
  }

  export type EmployeeFarmEmployeeIdFarmIdCompoundUniqueInput = {
    employeeId: string
    farmId: string
  }

  export type EmployeeFarmCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    farmId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeFarmMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    farmId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeFarmMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    farmId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EmployeeBenefitEmployeeIdNameCompoundUniqueInput = {
    employeeId: string
    name: string
  }

  export type EmployeeBenefitCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeBenefitAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EmployeeBenefitMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeBenefitMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeBenefitSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FarmCreateNestedManyWithoutUserInput = {
    create?: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput> | FarmCreateWithoutUserInput[] | FarmUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutUserInput | FarmCreateOrConnectWithoutUserInput[]
    createMany?: FarmCreateManyUserInputEnvelope
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
  }

  export type FarmUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput> | FarmCreateWithoutUserInput[] | FarmUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutUserInput | FarmCreateOrConnectWithoutUserInput[]
    createMany?: FarmCreateManyUserInputEnvelope
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FarmUpdateManyWithoutUserNestedInput = {
    create?: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput> | FarmCreateWithoutUserInput[] | FarmUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutUserInput | FarmCreateOrConnectWithoutUserInput[]
    upsert?: FarmUpsertWithWhereUniqueWithoutUserInput | FarmUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FarmCreateManyUserInputEnvelope
    set?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    disconnect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    delete?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    update?: FarmUpdateWithWhereUniqueWithoutUserInput | FarmUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FarmUpdateManyWithWhereWithoutUserInput | FarmUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FarmScalarWhereInput | FarmScalarWhereInput[]
  }

  export type FarmUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput> | FarmCreateWithoutUserInput[] | FarmUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutUserInput | FarmCreateOrConnectWithoutUserInput[]
    upsert?: FarmUpsertWithWhereUniqueWithoutUserInput | FarmUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FarmCreateManyUserInputEnvelope
    set?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    disconnect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    delete?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    update?: FarmUpdateWithWhereUniqueWithoutUserInput | FarmUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FarmUpdateManyWithWhereWithoutUserInput | FarmUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FarmScalarWhereInput | FarmScalarWhereInput[]
  }

  export type FarmCreatefarmingTypesInput = {
    set: string[]
  }

  export type EmployeeFarmCreateNestedManyWithoutFarmInput = {
    create?: XOR<EmployeeFarmCreateWithoutFarmInput, EmployeeFarmUncheckedCreateWithoutFarmInput> | EmployeeFarmCreateWithoutFarmInput[] | EmployeeFarmUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: EmployeeFarmCreateOrConnectWithoutFarmInput | EmployeeFarmCreateOrConnectWithoutFarmInput[]
    createMany?: EmployeeFarmCreateManyFarmInputEnvelope
    connect?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutFarmsInput = {
    create?: XOR<UserCreateWithoutFarmsInput, UserUncheckedCreateWithoutFarmsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFarmsInput
    connect?: UserWhereUniqueInput
  }

  export type EmployeeFarmUncheckedCreateNestedManyWithoutFarmInput = {
    create?: XOR<EmployeeFarmCreateWithoutFarmInput, EmployeeFarmUncheckedCreateWithoutFarmInput> | EmployeeFarmCreateWithoutFarmInput[] | EmployeeFarmUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: EmployeeFarmCreateOrConnectWithoutFarmInput | EmployeeFarmCreateOrConnectWithoutFarmInput[]
    createMany?: EmployeeFarmCreateManyFarmInputEnvelope
    connect?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FarmUpdatefarmingTypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EmployeeFarmUpdateManyWithoutFarmNestedInput = {
    create?: XOR<EmployeeFarmCreateWithoutFarmInput, EmployeeFarmUncheckedCreateWithoutFarmInput> | EmployeeFarmCreateWithoutFarmInput[] | EmployeeFarmUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: EmployeeFarmCreateOrConnectWithoutFarmInput | EmployeeFarmCreateOrConnectWithoutFarmInput[]
    upsert?: EmployeeFarmUpsertWithWhereUniqueWithoutFarmInput | EmployeeFarmUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: EmployeeFarmCreateManyFarmInputEnvelope
    set?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
    disconnect?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
    delete?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
    connect?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
    update?: EmployeeFarmUpdateWithWhereUniqueWithoutFarmInput | EmployeeFarmUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: EmployeeFarmUpdateManyWithWhereWithoutFarmInput | EmployeeFarmUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: EmployeeFarmScalarWhereInput | EmployeeFarmScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutFarmsNestedInput = {
    create?: XOR<UserCreateWithoutFarmsInput, UserUncheckedCreateWithoutFarmsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFarmsInput
    upsert?: UserUpsertWithoutFarmsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFarmsInput, UserUpdateWithoutFarmsInput>, UserUncheckedUpdateWithoutFarmsInput>
  }

  export type EmployeeFarmUncheckedUpdateManyWithoutFarmNestedInput = {
    create?: XOR<EmployeeFarmCreateWithoutFarmInput, EmployeeFarmUncheckedCreateWithoutFarmInput> | EmployeeFarmCreateWithoutFarmInput[] | EmployeeFarmUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: EmployeeFarmCreateOrConnectWithoutFarmInput | EmployeeFarmCreateOrConnectWithoutFarmInput[]
    upsert?: EmployeeFarmUpsertWithWhereUniqueWithoutFarmInput | EmployeeFarmUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: EmployeeFarmCreateManyFarmInputEnvelope
    set?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
    disconnect?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
    delete?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
    connect?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
    update?: EmployeeFarmUpdateWithWhereUniqueWithoutFarmInput | EmployeeFarmUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: EmployeeFarmUpdateManyWithWhereWithoutFarmInput | EmployeeFarmUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: EmployeeFarmScalarWhereInput | EmployeeFarmScalarWhereInput[]
  }

  export type EmployeeBenefitCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeBenefitCreateWithoutEmployeeInput, EmployeeBenefitUncheckedCreateWithoutEmployeeInput> | EmployeeBenefitCreateWithoutEmployeeInput[] | EmployeeBenefitUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeBenefitCreateOrConnectWithoutEmployeeInput | EmployeeBenefitCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeBenefitCreateManyEmployeeInputEnvelope
    connect?: EmployeeBenefitWhereUniqueInput | EmployeeBenefitWhereUniqueInput[]
  }

  export type EmployeeFarmCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeFarmCreateWithoutEmployeeInput, EmployeeFarmUncheckedCreateWithoutEmployeeInput> | EmployeeFarmCreateWithoutEmployeeInput[] | EmployeeFarmUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeFarmCreateOrConnectWithoutEmployeeInput | EmployeeFarmCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeFarmCreateManyEmployeeInputEnvelope
    connect?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
  }

  export type EmployeeBenefitUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeBenefitCreateWithoutEmployeeInput, EmployeeBenefitUncheckedCreateWithoutEmployeeInput> | EmployeeBenefitCreateWithoutEmployeeInput[] | EmployeeBenefitUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeBenefitCreateOrConnectWithoutEmployeeInput | EmployeeBenefitCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeBenefitCreateManyEmployeeInputEnvelope
    connect?: EmployeeBenefitWhereUniqueInput | EmployeeBenefitWhereUniqueInput[]
  }

  export type EmployeeFarmUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeFarmCreateWithoutEmployeeInput, EmployeeFarmUncheckedCreateWithoutEmployeeInput> | EmployeeFarmCreateWithoutEmployeeInput[] | EmployeeFarmUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeFarmCreateOrConnectWithoutEmployeeInput | EmployeeFarmCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeFarmCreateManyEmployeeInputEnvelope
    connect?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
  }

  export type EmployeeBenefitUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeBenefitCreateWithoutEmployeeInput, EmployeeBenefitUncheckedCreateWithoutEmployeeInput> | EmployeeBenefitCreateWithoutEmployeeInput[] | EmployeeBenefitUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeBenefitCreateOrConnectWithoutEmployeeInput | EmployeeBenefitCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeBenefitUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeBenefitUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeBenefitCreateManyEmployeeInputEnvelope
    set?: EmployeeBenefitWhereUniqueInput | EmployeeBenefitWhereUniqueInput[]
    disconnect?: EmployeeBenefitWhereUniqueInput | EmployeeBenefitWhereUniqueInput[]
    delete?: EmployeeBenefitWhereUniqueInput | EmployeeBenefitWhereUniqueInput[]
    connect?: EmployeeBenefitWhereUniqueInput | EmployeeBenefitWhereUniqueInput[]
    update?: EmployeeBenefitUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeBenefitUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeBenefitUpdateManyWithWhereWithoutEmployeeInput | EmployeeBenefitUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeBenefitScalarWhereInput | EmployeeBenefitScalarWhereInput[]
  }

  export type EmployeeFarmUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeFarmCreateWithoutEmployeeInput, EmployeeFarmUncheckedCreateWithoutEmployeeInput> | EmployeeFarmCreateWithoutEmployeeInput[] | EmployeeFarmUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeFarmCreateOrConnectWithoutEmployeeInput | EmployeeFarmCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeFarmUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeFarmUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeFarmCreateManyEmployeeInputEnvelope
    set?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
    disconnect?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
    delete?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
    connect?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
    update?: EmployeeFarmUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeFarmUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeFarmUpdateManyWithWhereWithoutEmployeeInput | EmployeeFarmUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeFarmScalarWhereInput | EmployeeFarmScalarWhereInput[]
  }

  export type EmployeeBenefitUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeBenefitCreateWithoutEmployeeInput, EmployeeBenefitUncheckedCreateWithoutEmployeeInput> | EmployeeBenefitCreateWithoutEmployeeInput[] | EmployeeBenefitUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeBenefitCreateOrConnectWithoutEmployeeInput | EmployeeBenefitCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeBenefitUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeBenefitUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeBenefitCreateManyEmployeeInputEnvelope
    set?: EmployeeBenefitWhereUniqueInput | EmployeeBenefitWhereUniqueInput[]
    disconnect?: EmployeeBenefitWhereUniqueInput | EmployeeBenefitWhereUniqueInput[]
    delete?: EmployeeBenefitWhereUniqueInput | EmployeeBenefitWhereUniqueInput[]
    connect?: EmployeeBenefitWhereUniqueInput | EmployeeBenefitWhereUniqueInput[]
    update?: EmployeeBenefitUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeBenefitUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeBenefitUpdateManyWithWhereWithoutEmployeeInput | EmployeeBenefitUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeBenefitScalarWhereInput | EmployeeBenefitScalarWhereInput[]
  }

  export type EmployeeFarmUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeFarmCreateWithoutEmployeeInput, EmployeeFarmUncheckedCreateWithoutEmployeeInput> | EmployeeFarmCreateWithoutEmployeeInput[] | EmployeeFarmUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeFarmCreateOrConnectWithoutEmployeeInput | EmployeeFarmCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeFarmUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeFarmUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeFarmCreateManyEmployeeInputEnvelope
    set?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
    disconnect?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
    delete?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
    connect?: EmployeeFarmWhereUniqueInput | EmployeeFarmWhereUniqueInput[]
    update?: EmployeeFarmUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeFarmUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeFarmUpdateManyWithWhereWithoutEmployeeInput | EmployeeFarmUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeFarmScalarWhereInput | EmployeeFarmScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutFarmsInput = {
    create?: XOR<EmployeeCreateWithoutFarmsInput, EmployeeUncheckedCreateWithoutFarmsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutFarmsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type FarmCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<FarmCreateWithoutEmployeesInput, FarmUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: FarmCreateOrConnectWithoutEmployeesInput
    connect?: FarmWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutFarmsNestedInput = {
    create?: XOR<EmployeeCreateWithoutFarmsInput, EmployeeUncheckedCreateWithoutFarmsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutFarmsInput
    upsert?: EmployeeUpsertWithoutFarmsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutFarmsInput, EmployeeUpdateWithoutFarmsInput>, EmployeeUncheckedUpdateWithoutFarmsInput>
  }

  export type FarmUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<FarmCreateWithoutEmployeesInput, FarmUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: FarmCreateOrConnectWithoutEmployeesInput
    upsert?: FarmUpsertWithoutEmployeesInput
    connect?: FarmWhereUniqueInput
    update?: XOR<XOR<FarmUpdateToOneWithWhereWithoutEmployeesInput, FarmUpdateWithoutEmployeesInput>, FarmUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeeCreateNestedOneWithoutBenefitsInput = {
    create?: XOR<EmployeeCreateWithoutBenefitsInput, EmployeeUncheckedCreateWithoutBenefitsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutBenefitsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeUpdateOneRequiredWithoutBenefitsNestedInput = {
    create?: XOR<EmployeeCreateWithoutBenefitsInput, EmployeeUncheckedCreateWithoutBenefitsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutBenefitsInput
    upsert?: EmployeeUpsertWithoutBenefitsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutBenefitsInput, EmployeeUpdateWithoutBenefitsInput>, EmployeeUncheckedUpdateWithoutBenefitsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FarmCreateWithoutUserInput = {
    id?: string
    name: string
    county: string
    administrativeLocation: string
    size: number
    ownership: string
    farmingTypes?: FarmCreatefarmingTypesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeFarmCreateNestedManyWithoutFarmInput
  }

  export type FarmUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    county: string
    administrativeLocation: string
    size: number
    ownership: string
    farmingTypes?: FarmCreatefarmingTypesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeFarmUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmCreateOrConnectWithoutUserInput = {
    where: FarmWhereUniqueInput
    create: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput>
  }

  export type FarmCreateManyUserInputEnvelope = {
    data: FarmCreateManyUserInput | FarmCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FarmUpsertWithWhereUniqueWithoutUserInput = {
    where: FarmWhereUniqueInput
    update: XOR<FarmUpdateWithoutUserInput, FarmUncheckedUpdateWithoutUserInput>
    create: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput>
  }

  export type FarmUpdateWithWhereUniqueWithoutUserInput = {
    where: FarmWhereUniqueInput
    data: XOR<FarmUpdateWithoutUserInput, FarmUncheckedUpdateWithoutUserInput>
  }

  export type FarmUpdateManyWithWhereWithoutUserInput = {
    where: FarmScalarWhereInput
    data: XOR<FarmUpdateManyMutationInput, FarmUncheckedUpdateManyWithoutUserInput>
  }

  export type FarmScalarWhereInput = {
    AND?: FarmScalarWhereInput | FarmScalarWhereInput[]
    OR?: FarmScalarWhereInput[]
    NOT?: FarmScalarWhereInput | FarmScalarWhereInput[]
    id?: StringFilter<"Farm"> | string
    name?: StringFilter<"Farm"> | string
    county?: StringFilter<"Farm"> | string
    administrativeLocation?: StringFilter<"Farm"> | string
    size?: FloatFilter<"Farm"> | number
    ownership?: StringFilter<"Farm"> | string
    farmingTypes?: StringNullableListFilter<"Farm">
    userId?: StringFilter<"Farm"> | string
    createdAt?: DateTimeFilter<"Farm"> | Date | string
    updatedAt?: DateTimeFilter<"Farm"> | Date | string
  }

  export type EmployeeFarmCreateWithoutFarmInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutFarmsInput
  }

  export type EmployeeFarmUncheckedCreateWithoutFarmInput = {
    id?: string
    employeeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeFarmCreateOrConnectWithoutFarmInput = {
    where: EmployeeFarmWhereUniqueInput
    create: XOR<EmployeeFarmCreateWithoutFarmInput, EmployeeFarmUncheckedCreateWithoutFarmInput>
  }

  export type EmployeeFarmCreateManyFarmInputEnvelope = {
    data: EmployeeFarmCreateManyFarmInput | EmployeeFarmCreateManyFarmInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutFarmsInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    gender: string
    dob: string
    residenceCounty: string
    residenceLocation?: string | null
    email?: string | null
    phoneNumber: string
    businessNumber?: string | null
    pin: string
    yearsOfExperience?: number | null
    otp?: string | null
    otpExpiry?: Date | string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutFarmsInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    gender: string
    dob: string
    residenceCounty: string
    residenceLocation?: string | null
    email?: string | null
    phoneNumber: string
    businessNumber?: string | null
    pin: string
    yearsOfExperience?: number | null
    otp?: string | null
    otpExpiry?: Date | string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutFarmsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFarmsInput, UserUncheckedCreateWithoutFarmsInput>
  }

  export type EmployeeFarmUpsertWithWhereUniqueWithoutFarmInput = {
    where: EmployeeFarmWhereUniqueInput
    update: XOR<EmployeeFarmUpdateWithoutFarmInput, EmployeeFarmUncheckedUpdateWithoutFarmInput>
    create: XOR<EmployeeFarmCreateWithoutFarmInput, EmployeeFarmUncheckedCreateWithoutFarmInput>
  }

  export type EmployeeFarmUpdateWithWhereUniqueWithoutFarmInput = {
    where: EmployeeFarmWhereUniqueInput
    data: XOR<EmployeeFarmUpdateWithoutFarmInput, EmployeeFarmUncheckedUpdateWithoutFarmInput>
  }

  export type EmployeeFarmUpdateManyWithWhereWithoutFarmInput = {
    where: EmployeeFarmScalarWhereInput
    data: XOR<EmployeeFarmUpdateManyMutationInput, EmployeeFarmUncheckedUpdateManyWithoutFarmInput>
  }

  export type EmployeeFarmScalarWhereInput = {
    AND?: EmployeeFarmScalarWhereInput | EmployeeFarmScalarWhereInput[]
    OR?: EmployeeFarmScalarWhereInput[]
    NOT?: EmployeeFarmScalarWhereInput | EmployeeFarmScalarWhereInput[]
    id?: StringFilter<"EmployeeFarm"> | string
    employeeId?: StringFilter<"EmployeeFarm"> | string
    farmId?: StringFilter<"EmployeeFarm"> | string
    createdAt?: DateTimeFilter<"EmployeeFarm"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeFarm"> | Date | string
  }

  export type UserUpsertWithoutFarmsInput = {
    update: XOR<UserUpdateWithoutFarmsInput, UserUncheckedUpdateWithoutFarmsInput>
    create: XOR<UserCreateWithoutFarmsInput, UserUncheckedCreateWithoutFarmsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFarmsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFarmsInput, UserUncheckedUpdateWithoutFarmsInput>
  }

  export type UserUpdateWithoutFarmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    residenceCounty?: StringFieldUpdateOperationsInput | string
    residenceLocation?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    businessNumber?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: StringFieldUpdateOperationsInput | string
    yearsOfExperience?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutFarmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    residenceCounty?: StringFieldUpdateOperationsInput | string
    residenceLocation?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    businessNumber?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: StringFieldUpdateOperationsInput | string
    yearsOfExperience?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeBenefitCreateWithoutEmployeeInput = {
    id?: string
    name: string
    amount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeBenefitUncheckedCreateWithoutEmployeeInput = {
    id?: string
    name: string
    amount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeBenefitCreateOrConnectWithoutEmployeeInput = {
    where: EmployeeBenefitWhereUniqueInput
    create: XOR<EmployeeBenefitCreateWithoutEmployeeInput, EmployeeBenefitUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeBenefitCreateManyEmployeeInputEnvelope = {
    data: EmployeeBenefitCreateManyEmployeeInput | EmployeeBenefitCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeFarmCreateWithoutEmployeeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    farm: FarmCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeFarmUncheckedCreateWithoutEmployeeInput = {
    id?: string
    farmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeFarmCreateOrConnectWithoutEmployeeInput = {
    where: EmployeeFarmWhereUniqueInput
    create: XOR<EmployeeFarmCreateWithoutEmployeeInput, EmployeeFarmUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeFarmCreateManyEmployeeInputEnvelope = {
    data: EmployeeFarmCreateManyEmployeeInput | EmployeeFarmCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeBenefitUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeBenefitWhereUniqueInput
    update: XOR<EmployeeBenefitUpdateWithoutEmployeeInput, EmployeeBenefitUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EmployeeBenefitCreateWithoutEmployeeInput, EmployeeBenefitUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeBenefitUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeBenefitWhereUniqueInput
    data: XOR<EmployeeBenefitUpdateWithoutEmployeeInput, EmployeeBenefitUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeBenefitUpdateManyWithWhereWithoutEmployeeInput = {
    where: EmployeeBenefitScalarWhereInput
    data: XOR<EmployeeBenefitUpdateManyMutationInput, EmployeeBenefitUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EmployeeBenefitScalarWhereInput = {
    AND?: EmployeeBenefitScalarWhereInput | EmployeeBenefitScalarWhereInput[]
    OR?: EmployeeBenefitScalarWhereInput[]
    NOT?: EmployeeBenefitScalarWhereInput | EmployeeBenefitScalarWhereInput[]
    id?: StringFilter<"EmployeeBenefit"> | string
    employeeId?: StringFilter<"EmployeeBenefit"> | string
    name?: StringFilter<"EmployeeBenefit"> | string
    amount?: FloatNullableFilter<"EmployeeBenefit"> | number | null
    createdAt?: DateTimeFilter<"EmployeeBenefit"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeBenefit"> | Date | string
  }

  export type EmployeeFarmUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeFarmWhereUniqueInput
    update: XOR<EmployeeFarmUpdateWithoutEmployeeInput, EmployeeFarmUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EmployeeFarmCreateWithoutEmployeeInput, EmployeeFarmUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeFarmUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeFarmWhereUniqueInput
    data: XOR<EmployeeFarmUpdateWithoutEmployeeInput, EmployeeFarmUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeFarmUpdateManyWithWhereWithoutEmployeeInput = {
    where: EmployeeFarmScalarWhereInput
    data: XOR<EmployeeFarmUpdateManyMutationInput, EmployeeFarmUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EmployeeCreateWithoutFarmsInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    phone: string
    emergencyContact?: string | null
    idNumber: string
    idPhoto?: string | null
    employeeType: string
    dateOfEmployment: Date | string
    endDate?: Date | string | null
    role: string
    customRole?: string | null
    paymentSchedule: string
    salary: number
    typeOfEngagement?: string | null
    workSchedule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: EmployeeBenefitCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutFarmsInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    phone: string
    emergencyContact?: string | null
    idNumber: string
    idPhoto?: string | null
    employeeType: string
    dateOfEmployment: Date | string
    endDate?: Date | string | null
    role: string
    customRole?: string | null
    paymentSchedule: string
    salary: number
    typeOfEngagement?: string | null
    workSchedule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: EmployeeBenefitUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutFarmsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutFarmsInput, EmployeeUncheckedCreateWithoutFarmsInput>
  }

  export type FarmCreateWithoutEmployeesInput = {
    id?: string
    name: string
    county: string
    administrativeLocation: string
    size: number
    ownership: string
    farmingTypes?: FarmCreatefarmingTypesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFarmsInput
  }

  export type FarmUncheckedCreateWithoutEmployeesInput = {
    id?: string
    name: string
    county: string
    administrativeLocation: string
    size: number
    ownership: string
    farmingTypes?: FarmCreatefarmingTypesInput | string[]
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmCreateOrConnectWithoutEmployeesInput = {
    where: FarmWhereUniqueInput
    create: XOR<FarmCreateWithoutEmployeesInput, FarmUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeeUpsertWithoutFarmsInput = {
    update: XOR<EmployeeUpdateWithoutFarmsInput, EmployeeUncheckedUpdateWithoutFarmsInput>
    create: XOR<EmployeeCreateWithoutFarmsInput, EmployeeUncheckedCreateWithoutFarmsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutFarmsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutFarmsInput, EmployeeUncheckedUpdateWithoutFarmsInput>
  }

  export type EmployeeUpdateWithoutFarmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: StringFieldUpdateOperationsInput | string
    idPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    employeeType?: StringFieldUpdateOperationsInput | string
    dateOfEmployment?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    customRole?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSchedule?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    typeOfEngagement?: NullableStringFieldUpdateOperationsInput | string | null
    workSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: EmployeeBenefitUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutFarmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: StringFieldUpdateOperationsInput | string
    idPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    employeeType?: StringFieldUpdateOperationsInput | string
    dateOfEmployment?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    customRole?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSchedule?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    typeOfEngagement?: NullableStringFieldUpdateOperationsInput | string | null
    workSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: EmployeeBenefitUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type FarmUpsertWithoutEmployeesInput = {
    update: XOR<FarmUpdateWithoutEmployeesInput, FarmUncheckedUpdateWithoutEmployeesInput>
    create: XOR<FarmCreateWithoutEmployeesInput, FarmUncheckedCreateWithoutEmployeesInput>
    where?: FarmWhereInput
  }

  export type FarmUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: FarmWhereInput
    data: XOR<FarmUpdateWithoutEmployeesInput, FarmUncheckedUpdateWithoutEmployeesInput>
  }

  export type FarmUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    administrativeLocation?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    ownership?: StringFieldUpdateOperationsInput | string
    farmingTypes?: FarmUpdatefarmingTypesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFarmsNestedInput
  }

  export type FarmUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    administrativeLocation?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    ownership?: StringFieldUpdateOperationsInput | string
    farmingTypes?: FarmUpdatefarmingTypesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateWithoutBenefitsInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    phone: string
    emergencyContact?: string | null
    idNumber: string
    idPhoto?: string | null
    employeeType: string
    dateOfEmployment: Date | string
    endDate?: Date | string | null
    role: string
    customRole?: string | null
    paymentSchedule: string
    salary: number
    typeOfEngagement?: string | null
    workSchedule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farms?: EmployeeFarmCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutBenefitsInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    phone: string
    emergencyContact?: string | null
    idNumber: string
    idPhoto?: string | null
    employeeType: string
    dateOfEmployment: Date | string
    endDate?: Date | string | null
    role: string
    customRole?: string | null
    paymentSchedule: string
    salary: number
    typeOfEngagement?: string | null
    workSchedule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farms?: EmployeeFarmUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutBenefitsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutBenefitsInput, EmployeeUncheckedCreateWithoutBenefitsInput>
  }

  export type EmployeeUpsertWithoutBenefitsInput = {
    update: XOR<EmployeeUpdateWithoutBenefitsInput, EmployeeUncheckedUpdateWithoutBenefitsInput>
    create: XOR<EmployeeCreateWithoutBenefitsInput, EmployeeUncheckedCreateWithoutBenefitsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutBenefitsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutBenefitsInput, EmployeeUncheckedUpdateWithoutBenefitsInput>
  }

  export type EmployeeUpdateWithoutBenefitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: StringFieldUpdateOperationsInput | string
    idPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    employeeType?: StringFieldUpdateOperationsInput | string
    dateOfEmployment?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    customRole?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSchedule?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    typeOfEngagement?: NullableStringFieldUpdateOperationsInput | string | null
    workSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farms?: EmployeeFarmUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutBenefitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: StringFieldUpdateOperationsInput | string
    idPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    employeeType?: StringFieldUpdateOperationsInput | string
    dateOfEmployment?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    customRole?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSchedule?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    typeOfEngagement?: NullableStringFieldUpdateOperationsInput | string | null
    workSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farms?: EmployeeFarmUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type FarmCreateManyUserInput = {
    id?: string
    name: string
    county: string
    administrativeLocation: string
    size: number
    ownership: string
    farmingTypes?: FarmCreatefarmingTypesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    administrativeLocation?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    ownership?: StringFieldUpdateOperationsInput | string
    farmingTypes?: FarmUpdatefarmingTypesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeFarmUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    administrativeLocation?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    ownership?: StringFieldUpdateOperationsInput | string
    farmingTypes?: FarmUpdatefarmingTypesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeFarmUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    administrativeLocation?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    ownership?: StringFieldUpdateOperationsInput | string
    farmingTypes?: FarmUpdatefarmingTypesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeFarmCreateManyFarmInput = {
    id?: string
    employeeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeFarmUpdateWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutFarmsNestedInput
  }

  export type EmployeeFarmUncheckedUpdateWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeFarmUncheckedUpdateManyWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeBenefitCreateManyEmployeeInput = {
    id?: string
    name: string
    amount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeFarmCreateManyEmployeeInput = {
    id?: string
    farmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeBenefitUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeBenefitUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeBenefitUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeFarmUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EmployeeFarmUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeFarmUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}