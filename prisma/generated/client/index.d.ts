
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
 * Model EnYusufali
 * 
 */
export type EnYusufali = $Result.DefaultSelection<Prisma.$EnYusufaliPayload>
/**
 * Model QuranSajda
 * 
 */
export type QuranSajda = $Result.DefaultSelection<Prisma.$QuranSajdaPayload>
/**
 * Model QuranSurah
 * 
 */
export type QuranSurah = $Result.DefaultSelection<Prisma.$QuranSurahPayload>
/**
 * Model QuranText
 * 
 */
export type QuranText = $Result.DefaultSelection<Prisma.$QuranTextPayload>
/**
 * Model SurahDescription
 * 
 */
export type SurahDescription = $Result.DefaultSelection<Prisma.$SurahDescriptionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserBookmark
 * 
 */
export type UserBookmark = $Result.DefaultSelection<Prisma.$UserBookmarkPayload>
/**
 * Model QuranTransliteration
 * 
 */
export type QuranTransliteration = $Result.DefaultSelection<Prisma.$QuranTransliterationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more EnYusufalis
 * const enYusufalis = await prisma.enYusufali.findMany()
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
   * // Fetch zero or more EnYusufalis
   * const enYusufalis = await prisma.enYusufali.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.enYusufali`: Exposes CRUD operations for the **EnYusufali** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnYusufalis
    * const enYusufalis = await prisma.enYusufali.findMany()
    * ```
    */
  get enYusufali(): Prisma.EnYusufaliDelegate<ExtArgs>;

  /**
   * `prisma.quranSajda`: Exposes CRUD operations for the **QuranSajda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuranSajdas
    * const quranSajdas = await prisma.quranSajda.findMany()
    * ```
    */
  get quranSajda(): Prisma.QuranSajdaDelegate<ExtArgs>;

  /**
   * `prisma.quranSurah`: Exposes CRUD operations for the **QuranSurah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuranSurahs
    * const quranSurahs = await prisma.quranSurah.findMany()
    * ```
    */
  get quranSurah(): Prisma.QuranSurahDelegate<ExtArgs>;

  /**
   * `prisma.quranText`: Exposes CRUD operations for the **QuranText** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuranTexts
    * const quranTexts = await prisma.quranText.findMany()
    * ```
    */
  get quranText(): Prisma.QuranTextDelegate<ExtArgs>;

  /**
   * `prisma.surahDescription`: Exposes CRUD operations for the **SurahDescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SurahDescriptions
    * const surahDescriptions = await prisma.surahDescription.findMany()
    * ```
    */
  get surahDescription(): Prisma.SurahDescriptionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userBookmark`: Exposes CRUD operations for the **UserBookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBookmarks
    * const userBookmarks = await prisma.userBookmark.findMany()
    * ```
    */
  get userBookmark(): Prisma.UserBookmarkDelegate<ExtArgs>;

  /**
   * `prisma.quranTransliteration`: Exposes CRUD operations for the **QuranTransliteration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuranTransliterations
    * const quranTransliterations = await prisma.quranTransliteration.findMany()
    * ```
    */
  get quranTransliteration(): Prisma.QuranTransliterationDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    EnYusufali: 'EnYusufali',
    QuranSajda: 'QuranSajda',
    QuranSurah: 'QuranSurah',
    QuranText: 'QuranText',
    SurahDescription: 'SurahDescription',
    User: 'User',
    UserBookmark: 'UserBookmark',
    QuranTransliteration: 'QuranTransliteration'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "enYusufali" | "quranSajda" | "quranSurah" | "quranText" | "surahDescription" | "user" | "userBookmark" | "quranTransliteration"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      EnYusufali: {
        payload: Prisma.$EnYusufaliPayload<ExtArgs>
        fields: Prisma.EnYusufaliFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnYusufaliFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnYusufaliPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnYusufaliFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnYusufaliPayload>
          }
          findFirst: {
            args: Prisma.EnYusufaliFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnYusufaliPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnYusufaliFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnYusufaliPayload>
          }
          findMany: {
            args: Prisma.EnYusufaliFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnYusufaliPayload>[]
          }
          create: {
            args: Prisma.EnYusufaliCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnYusufaliPayload>
          }
          createMany: {
            args: Prisma.EnYusufaliCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnYusufaliCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnYusufaliPayload>[]
          }
          delete: {
            args: Prisma.EnYusufaliDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnYusufaliPayload>
          }
          update: {
            args: Prisma.EnYusufaliUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnYusufaliPayload>
          }
          deleteMany: {
            args: Prisma.EnYusufaliDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnYusufaliUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EnYusufaliUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnYusufaliPayload>
          }
          aggregate: {
            args: Prisma.EnYusufaliAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnYusufali>
          }
          groupBy: {
            args: Prisma.EnYusufaliGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnYusufaliGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnYusufaliCountArgs<ExtArgs>
            result: $Utils.Optional<EnYusufaliCountAggregateOutputType> | number
          }
        }
      }
      QuranSajda: {
        payload: Prisma.$QuranSajdaPayload<ExtArgs>
        fields: Prisma.QuranSajdaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuranSajdaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSajdaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuranSajdaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSajdaPayload>
          }
          findFirst: {
            args: Prisma.QuranSajdaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSajdaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuranSajdaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSajdaPayload>
          }
          findMany: {
            args: Prisma.QuranSajdaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSajdaPayload>[]
          }
          create: {
            args: Prisma.QuranSajdaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSajdaPayload>
          }
          createMany: {
            args: Prisma.QuranSajdaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuranSajdaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSajdaPayload>[]
          }
          delete: {
            args: Prisma.QuranSajdaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSajdaPayload>
          }
          update: {
            args: Prisma.QuranSajdaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSajdaPayload>
          }
          deleteMany: {
            args: Prisma.QuranSajdaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuranSajdaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuranSajdaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSajdaPayload>
          }
          aggregate: {
            args: Prisma.QuranSajdaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuranSajda>
          }
          groupBy: {
            args: Prisma.QuranSajdaGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuranSajdaGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuranSajdaCountArgs<ExtArgs>
            result: $Utils.Optional<QuranSajdaCountAggregateOutputType> | number
          }
        }
      }
      QuranSurah: {
        payload: Prisma.$QuranSurahPayload<ExtArgs>
        fields: Prisma.QuranSurahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuranSurahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSurahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuranSurahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSurahPayload>
          }
          findFirst: {
            args: Prisma.QuranSurahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSurahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuranSurahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSurahPayload>
          }
          findMany: {
            args: Prisma.QuranSurahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSurahPayload>[]
          }
          create: {
            args: Prisma.QuranSurahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSurahPayload>
          }
          createMany: {
            args: Prisma.QuranSurahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuranSurahCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSurahPayload>[]
          }
          delete: {
            args: Prisma.QuranSurahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSurahPayload>
          }
          update: {
            args: Prisma.QuranSurahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSurahPayload>
          }
          deleteMany: {
            args: Prisma.QuranSurahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuranSurahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuranSurahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranSurahPayload>
          }
          aggregate: {
            args: Prisma.QuranSurahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuranSurah>
          }
          groupBy: {
            args: Prisma.QuranSurahGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuranSurahGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuranSurahCountArgs<ExtArgs>
            result: $Utils.Optional<QuranSurahCountAggregateOutputType> | number
          }
        }
      }
      QuranText: {
        payload: Prisma.$QuranTextPayload<ExtArgs>
        fields: Prisma.QuranTextFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuranTextFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTextPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuranTextFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTextPayload>
          }
          findFirst: {
            args: Prisma.QuranTextFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTextPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuranTextFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTextPayload>
          }
          findMany: {
            args: Prisma.QuranTextFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTextPayload>[]
          }
          create: {
            args: Prisma.QuranTextCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTextPayload>
          }
          createMany: {
            args: Prisma.QuranTextCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuranTextCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTextPayload>[]
          }
          delete: {
            args: Prisma.QuranTextDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTextPayload>
          }
          update: {
            args: Prisma.QuranTextUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTextPayload>
          }
          deleteMany: {
            args: Prisma.QuranTextDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuranTextUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuranTextUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTextPayload>
          }
          aggregate: {
            args: Prisma.QuranTextAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuranText>
          }
          groupBy: {
            args: Prisma.QuranTextGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuranTextGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuranTextCountArgs<ExtArgs>
            result: $Utils.Optional<QuranTextCountAggregateOutputType> | number
          }
        }
      }
      SurahDescription: {
        payload: Prisma.$SurahDescriptionPayload<ExtArgs>
        fields: Prisma.SurahDescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurahDescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahDescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurahDescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahDescriptionPayload>
          }
          findFirst: {
            args: Prisma.SurahDescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahDescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurahDescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahDescriptionPayload>
          }
          findMany: {
            args: Prisma.SurahDescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahDescriptionPayload>[]
          }
          create: {
            args: Prisma.SurahDescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahDescriptionPayload>
          }
          createMany: {
            args: Prisma.SurahDescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SurahDescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahDescriptionPayload>[]
          }
          delete: {
            args: Prisma.SurahDescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahDescriptionPayload>
          }
          update: {
            args: Prisma.SurahDescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahDescriptionPayload>
          }
          deleteMany: {
            args: Prisma.SurahDescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurahDescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SurahDescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahDescriptionPayload>
          }
          aggregate: {
            args: Prisma.SurahDescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurahDescription>
          }
          groupBy: {
            args: Prisma.SurahDescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurahDescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SurahDescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SurahDescriptionCountAggregateOutputType> | number
          }
        }
      }
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
      UserBookmark: {
        payload: Prisma.$UserBookmarkPayload<ExtArgs>
        fields: Prisma.UserBookmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBookmarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBookmarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload>
          }
          findFirst: {
            args: Prisma.UserBookmarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBookmarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload>
          }
          findMany: {
            args: Prisma.UserBookmarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload>[]
          }
          create: {
            args: Prisma.UserBookmarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload>
          }
          createMany: {
            args: Prisma.UserBookmarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBookmarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload>[]
          }
          delete: {
            args: Prisma.UserBookmarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload>
          }
          update: {
            args: Prisma.UserBookmarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload>
          }
          deleteMany: {
            args: Prisma.UserBookmarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBookmarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserBookmarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload>
          }
          aggregate: {
            args: Prisma.UserBookmarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBookmark>
          }
          groupBy: {
            args: Prisma.UserBookmarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBookmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBookmarkCountArgs<ExtArgs>
            result: $Utils.Optional<UserBookmarkCountAggregateOutputType> | number
          }
        }
      }
      QuranTransliteration: {
        payload: Prisma.$QuranTransliterationPayload<ExtArgs>
        fields: Prisma.QuranTransliterationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuranTransliterationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTransliterationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuranTransliterationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTransliterationPayload>
          }
          findFirst: {
            args: Prisma.QuranTransliterationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTransliterationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuranTransliterationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTransliterationPayload>
          }
          findMany: {
            args: Prisma.QuranTransliterationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTransliterationPayload>[]
          }
          create: {
            args: Prisma.QuranTransliterationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTransliterationPayload>
          }
          createMany: {
            args: Prisma.QuranTransliterationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuranTransliterationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTransliterationPayload>[]
          }
          delete: {
            args: Prisma.QuranTransliterationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTransliterationPayload>
          }
          update: {
            args: Prisma.QuranTransliterationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTransliterationPayload>
          }
          deleteMany: {
            args: Prisma.QuranTransliterationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuranTransliterationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuranTransliterationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuranTransliterationPayload>
          }
          aggregate: {
            args: Prisma.QuranTransliterationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuranTransliteration>
          }
          groupBy: {
            args: Prisma.QuranTransliterationGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuranTransliterationGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuranTransliterationCountArgs<ExtArgs>
            result: $Utils.Optional<QuranTransliterationCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.DriverAdapter | null
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
    bookmarks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarks?: boolean | UserCountOutputTypeCountBookmarksArgs
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
  export type UserCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBookmarkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model EnYusufali
   */

  export type AggregateEnYusufali = {
    _count: EnYusufaliCountAggregateOutputType | null
    _avg: EnYusufaliAvgAggregateOutputType | null
    _sum: EnYusufaliSumAggregateOutputType | null
    _min: EnYusufaliMinAggregateOutputType | null
    _max: EnYusufaliMaxAggregateOutputType | null
  }

  export type EnYusufaliAvgAggregateOutputType = {
    index: number | null
    sura: number | null
    aya: number | null
  }

  export type EnYusufaliSumAggregateOutputType = {
    index: bigint | null
    sura: bigint | null
    aya: bigint | null
  }

  export type EnYusufaliMinAggregateOutputType = {
    index: bigint | null
    sura: bigint | null
    aya: bigint | null
    text: string | null
  }

  export type EnYusufaliMaxAggregateOutputType = {
    index: bigint | null
    sura: bigint | null
    aya: bigint | null
    text: string | null
  }

  export type EnYusufaliCountAggregateOutputType = {
    index: number
    sura: number
    aya: number
    text: number
    _all: number
  }


  export type EnYusufaliAvgAggregateInputType = {
    index?: true
    sura?: true
    aya?: true
  }

  export type EnYusufaliSumAggregateInputType = {
    index?: true
    sura?: true
    aya?: true
  }

  export type EnYusufaliMinAggregateInputType = {
    index?: true
    sura?: true
    aya?: true
    text?: true
  }

  export type EnYusufaliMaxAggregateInputType = {
    index?: true
    sura?: true
    aya?: true
    text?: true
  }

  export type EnYusufaliCountAggregateInputType = {
    index?: true
    sura?: true
    aya?: true
    text?: true
    _all?: true
  }

  export type EnYusufaliAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnYusufali to aggregate.
     */
    where?: EnYusufaliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnYusufalis to fetch.
     */
    orderBy?: EnYusufaliOrderByWithRelationInput | EnYusufaliOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnYusufaliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnYusufalis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnYusufalis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnYusufalis
    **/
    _count?: true | EnYusufaliCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnYusufaliAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnYusufaliSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnYusufaliMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnYusufaliMaxAggregateInputType
  }

  export type GetEnYusufaliAggregateType<T extends EnYusufaliAggregateArgs> = {
        [P in keyof T & keyof AggregateEnYusufali]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnYusufali[P]>
      : GetScalarType<T[P], AggregateEnYusufali[P]>
  }




  export type EnYusufaliGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnYusufaliWhereInput
    orderBy?: EnYusufaliOrderByWithAggregationInput | EnYusufaliOrderByWithAggregationInput[]
    by: EnYusufaliScalarFieldEnum[] | EnYusufaliScalarFieldEnum
    having?: EnYusufaliScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnYusufaliCountAggregateInputType | true
    _avg?: EnYusufaliAvgAggregateInputType
    _sum?: EnYusufaliSumAggregateInputType
    _min?: EnYusufaliMinAggregateInputType
    _max?: EnYusufaliMaxAggregateInputType
  }

  export type EnYusufaliGroupByOutputType = {
    index: bigint
    sura: bigint | null
    aya: bigint | null
    text: string | null
    _count: EnYusufaliCountAggregateOutputType | null
    _avg: EnYusufaliAvgAggregateOutputType | null
    _sum: EnYusufaliSumAggregateOutputType | null
    _min: EnYusufaliMinAggregateOutputType | null
    _max: EnYusufaliMaxAggregateOutputType | null
  }

  type GetEnYusufaliGroupByPayload<T extends EnYusufaliGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnYusufaliGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnYusufaliGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnYusufaliGroupByOutputType[P]>
            : GetScalarType<T[P], EnYusufaliGroupByOutputType[P]>
        }
      >
    >


  export type EnYusufaliSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    sura?: boolean
    aya?: boolean
    text?: boolean
  }, ExtArgs["result"]["enYusufali"]>

  export type EnYusufaliSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    sura?: boolean
    aya?: boolean
    text?: boolean
  }, ExtArgs["result"]["enYusufali"]>

  export type EnYusufaliSelectScalar = {
    index?: boolean
    sura?: boolean
    aya?: boolean
    text?: boolean
  }


  export type $EnYusufaliPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnYusufali"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      index: bigint
      sura: bigint | null
      aya: bigint | null
      text: string | null
    }, ExtArgs["result"]["enYusufali"]>
    composites: {}
  }

  type EnYusufaliGetPayload<S extends boolean | null | undefined | EnYusufaliDefaultArgs> = $Result.GetResult<Prisma.$EnYusufaliPayload, S>

  type EnYusufaliCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EnYusufaliFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EnYusufaliCountAggregateInputType | true
    }

  export interface EnYusufaliDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnYusufali'], meta: { name: 'EnYusufali' } }
    /**
     * Find zero or one EnYusufali that matches the filter.
     * @param {EnYusufaliFindUniqueArgs} args - Arguments to find a EnYusufali
     * @example
     * // Get one EnYusufali
     * const enYusufali = await prisma.enYusufali.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnYusufaliFindUniqueArgs>(args: SelectSubset<T, EnYusufaliFindUniqueArgs<ExtArgs>>): Prisma__EnYusufaliClient<$Result.GetResult<Prisma.$EnYusufaliPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EnYusufali that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EnYusufaliFindUniqueOrThrowArgs} args - Arguments to find a EnYusufali
     * @example
     * // Get one EnYusufali
     * const enYusufali = await prisma.enYusufali.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnYusufaliFindUniqueOrThrowArgs>(args: SelectSubset<T, EnYusufaliFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnYusufaliClient<$Result.GetResult<Prisma.$EnYusufaliPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EnYusufali that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnYusufaliFindFirstArgs} args - Arguments to find a EnYusufali
     * @example
     * // Get one EnYusufali
     * const enYusufali = await prisma.enYusufali.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnYusufaliFindFirstArgs>(args?: SelectSubset<T, EnYusufaliFindFirstArgs<ExtArgs>>): Prisma__EnYusufaliClient<$Result.GetResult<Prisma.$EnYusufaliPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EnYusufali that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnYusufaliFindFirstOrThrowArgs} args - Arguments to find a EnYusufali
     * @example
     * // Get one EnYusufali
     * const enYusufali = await prisma.enYusufali.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnYusufaliFindFirstOrThrowArgs>(args?: SelectSubset<T, EnYusufaliFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnYusufaliClient<$Result.GetResult<Prisma.$EnYusufaliPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EnYusufalis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnYusufaliFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnYusufalis
     * const enYusufalis = await prisma.enYusufali.findMany()
     * 
     * // Get first 10 EnYusufalis
     * const enYusufalis = await prisma.enYusufali.findMany({ take: 10 })
     * 
     * // Only select the `index`
     * const enYusufaliWithIndexOnly = await prisma.enYusufali.findMany({ select: { index: true } })
     * 
     */
    findMany<T extends EnYusufaliFindManyArgs>(args?: SelectSubset<T, EnYusufaliFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnYusufaliPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EnYusufali.
     * @param {EnYusufaliCreateArgs} args - Arguments to create a EnYusufali.
     * @example
     * // Create one EnYusufali
     * const EnYusufali = await prisma.enYusufali.create({
     *   data: {
     *     // ... data to create a EnYusufali
     *   }
     * })
     * 
     */
    create<T extends EnYusufaliCreateArgs>(args: SelectSubset<T, EnYusufaliCreateArgs<ExtArgs>>): Prisma__EnYusufaliClient<$Result.GetResult<Prisma.$EnYusufaliPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EnYusufalis.
     * @param {EnYusufaliCreateManyArgs} args - Arguments to create many EnYusufalis.
     * @example
     * // Create many EnYusufalis
     * const enYusufali = await prisma.enYusufali.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnYusufaliCreateManyArgs>(args?: SelectSubset<T, EnYusufaliCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnYusufalis and returns the data saved in the database.
     * @param {EnYusufaliCreateManyAndReturnArgs} args - Arguments to create many EnYusufalis.
     * @example
     * // Create many EnYusufalis
     * const enYusufali = await prisma.enYusufali.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnYusufalis and only return the `index`
     * const enYusufaliWithIndexOnly = await prisma.enYusufali.createManyAndReturn({ 
     *   select: { index: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnYusufaliCreateManyAndReturnArgs>(args?: SelectSubset<T, EnYusufaliCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnYusufaliPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EnYusufali.
     * @param {EnYusufaliDeleteArgs} args - Arguments to delete one EnYusufali.
     * @example
     * // Delete one EnYusufali
     * const EnYusufali = await prisma.enYusufali.delete({
     *   where: {
     *     // ... filter to delete one EnYusufali
     *   }
     * })
     * 
     */
    delete<T extends EnYusufaliDeleteArgs>(args: SelectSubset<T, EnYusufaliDeleteArgs<ExtArgs>>): Prisma__EnYusufaliClient<$Result.GetResult<Prisma.$EnYusufaliPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EnYusufali.
     * @param {EnYusufaliUpdateArgs} args - Arguments to update one EnYusufali.
     * @example
     * // Update one EnYusufali
     * const enYusufali = await prisma.enYusufali.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnYusufaliUpdateArgs>(args: SelectSubset<T, EnYusufaliUpdateArgs<ExtArgs>>): Prisma__EnYusufaliClient<$Result.GetResult<Prisma.$EnYusufaliPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EnYusufalis.
     * @param {EnYusufaliDeleteManyArgs} args - Arguments to filter EnYusufalis to delete.
     * @example
     * // Delete a few EnYusufalis
     * const { count } = await prisma.enYusufali.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnYusufaliDeleteManyArgs>(args?: SelectSubset<T, EnYusufaliDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnYusufalis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnYusufaliUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnYusufalis
     * const enYusufali = await prisma.enYusufali.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnYusufaliUpdateManyArgs>(args: SelectSubset<T, EnYusufaliUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EnYusufali.
     * @param {EnYusufaliUpsertArgs} args - Arguments to update or create a EnYusufali.
     * @example
     * // Update or create a EnYusufali
     * const enYusufali = await prisma.enYusufali.upsert({
     *   create: {
     *     // ... data to create a EnYusufali
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnYusufali we want to update
     *   }
     * })
     */
    upsert<T extends EnYusufaliUpsertArgs>(args: SelectSubset<T, EnYusufaliUpsertArgs<ExtArgs>>): Prisma__EnYusufaliClient<$Result.GetResult<Prisma.$EnYusufaliPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EnYusufalis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnYusufaliCountArgs} args - Arguments to filter EnYusufalis to count.
     * @example
     * // Count the number of EnYusufalis
     * const count = await prisma.enYusufali.count({
     *   where: {
     *     // ... the filter for the EnYusufalis we want to count
     *   }
     * })
    **/
    count<T extends EnYusufaliCountArgs>(
      args?: Subset<T, EnYusufaliCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnYusufaliCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnYusufali.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnYusufaliAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnYusufaliAggregateArgs>(args: Subset<T, EnYusufaliAggregateArgs>): Prisma.PrismaPromise<GetEnYusufaliAggregateType<T>>

    /**
     * Group by EnYusufali.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnYusufaliGroupByArgs} args - Group by arguments.
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
      T extends EnYusufaliGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnYusufaliGroupByArgs['orderBy'] }
        : { orderBy?: EnYusufaliGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnYusufaliGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnYusufaliGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnYusufali model
   */
  readonly fields: EnYusufaliFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnYusufali.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnYusufaliClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the EnYusufali model
   */ 
  interface EnYusufaliFieldRefs {
    readonly index: FieldRef<"EnYusufali", 'BigInt'>
    readonly sura: FieldRef<"EnYusufali", 'BigInt'>
    readonly aya: FieldRef<"EnYusufali", 'BigInt'>
    readonly text: FieldRef<"EnYusufali", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EnYusufali findUnique
   */
  export type EnYusufaliFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnYusufali
     */
    select?: EnYusufaliSelect<ExtArgs> | null
    /**
     * Filter, which EnYusufali to fetch.
     */
    where: EnYusufaliWhereUniqueInput
  }

  /**
   * EnYusufali findUniqueOrThrow
   */
  export type EnYusufaliFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnYusufali
     */
    select?: EnYusufaliSelect<ExtArgs> | null
    /**
     * Filter, which EnYusufali to fetch.
     */
    where: EnYusufaliWhereUniqueInput
  }

  /**
   * EnYusufali findFirst
   */
  export type EnYusufaliFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnYusufali
     */
    select?: EnYusufaliSelect<ExtArgs> | null
    /**
     * Filter, which EnYusufali to fetch.
     */
    where?: EnYusufaliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnYusufalis to fetch.
     */
    orderBy?: EnYusufaliOrderByWithRelationInput | EnYusufaliOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnYusufalis.
     */
    cursor?: EnYusufaliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnYusufalis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnYusufalis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnYusufalis.
     */
    distinct?: EnYusufaliScalarFieldEnum | EnYusufaliScalarFieldEnum[]
  }

  /**
   * EnYusufali findFirstOrThrow
   */
  export type EnYusufaliFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnYusufali
     */
    select?: EnYusufaliSelect<ExtArgs> | null
    /**
     * Filter, which EnYusufali to fetch.
     */
    where?: EnYusufaliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnYusufalis to fetch.
     */
    orderBy?: EnYusufaliOrderByWithRelationInput | EnYusufaliOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnYusufalis.
     */
    cursor?: EnYusufaliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnYusufalis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnYusufalis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnYusufalis.
     */
    distinct?: EnYusufaliScalarFieldEnum | EnYusufaliScalarFieldEnum[]
  }

  /**
   * EnYusufali findMany
   */
  export type EnYusufaliFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnYusufali
     */
    select?: EnYusufaliSelect<ExtArgs> | null
    /**
     * Filter, which EnYusufalis to fetch.
     */
    where?: EnYusufaliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnYusufalis to fetch.
     */
    orderBy?: EnYusufaliOrderByWithRelationInput | EnYusufaliOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnYusufalis.
     */
    cursor?: EnYusufaliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnYusufalis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnYusufalis.
     */
    skip?: number
    distinct?: EnYusufaliScalarFieldEnum | EnYusufaliScalarFieldEnum[]
  }

  /**
   * EnYusufali create
   */
  export type EnYusufaliCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnYusufali
     */
    select?: EnYusufaliSelect<ExtArgs> | null
    /**
     * The data needed to create a EnYusufali.
     */
    data?: XOR<EnYusufaliCreateInput, EnYusufaliUncheckedCreateInput>
  }

  /**
   * EnYusufali createMany
   */
  export type EnYusufaliCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnYusufalis.
     */
    data: EnYusufaliCreateManyInput | EnYusufaliCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnYusufali createManyAndReturn
   */
  export type EnYusufaliCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnYusufali
     */
    select?: EnYusufaliSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EnYusufalis.
     */
    data: EnYusufaliCreateManyInput | EnYusufaliCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnYusufali update
   */
  export type EnYusufaliUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnYusufali
     */
    select?: EnYusufaliSelect<ExtArgs> | null
    /**
     * The data needed to update a EnYusufali.
     */
    data: XOR<EnYusufaliUpdateInput, EnYusufaliUncheckedUpdateInput>
    /**
     * Choose, which EnYusufali to update.
     */
    where: EnYusufaliWhereUniqueInput
  }

  /**
   * EnYusufali updateMany
   */
  export type EnYusufaliUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnYusufalis.
     */
    data: XOR<EnYusufaliUpdateManyMutationInput, EnYusufaliUncheckedUpdateManyInput>
    /**
     * Filter which EnYusufalis to update
     */
    where?: EnYusufaliWhereInput
  }

  /**
   * EnYusufali upsert
   */
  export type EnYusufaliUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnYusufali
     */
    select?: EnYusufaliSelect<ExtArgs> | null
    /**
     * The filter to search for the EnYusufali to update in case it exists.
     */
    where: EnYusufaliWhereUniqueInput
    /**
     * In case the EnYusufali found by the `where` argument doesn't exist, create a new EnYusufali with this data.
     */
    create: XOR<EnYusufaliCreateInput, EnYusufaliUncheckedCreateInput>
    /**
     * In case the EnYusufali was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnYusufaliUpdateInput, EnYusufaliUncheckedUpdateInput>
  }

  /**
   * EnYusufali delete
   */
  export type EnYusufaliDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnYusufali
     */
    select?: EnYusufaliSelect<ExtArgs> | null
    /**
     * Filter which EnYusufali to delete.
     */
    where: EnYusufaliWhereUniqueInput
  }

  /**
   * EnYusufali deleteMany
   */
  export type EnYusufaliDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnYusufalis to delete
     */
    where?: EnYusufaliWhereInput
  }

  /**
   * EnYusufali without action
   */
  export type EnYusufaliDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnYusufali
     */
    select?: EnYusufaliSelect<ExtArgs> | null
  }


  /**
   * Model QuranSajda
   */

  export type AggregateQuranSajda = {
    _count: QuranSajdaCountAggregateOutputType | null
    _avg: QuranSajdaAvgAggregateOutputType | null
    _sum: QuranSajdaSumAggregateOutputType | null
    _min: QuranSajdaMinAggregateOutputType | null
    _max: QuranSajdaMaxAggregateOutputType | null
  }

  export type QuranSajdaAvgAggregateOutputType = {
    sajdaId: number | null
    surahNumber: number | null
    ayahNumber: number | null
  }

  export type QuranSajdaSumAggregateOutputType = {
    sajdaId: bigint | null
    surahNumber: bigint | null
    ayahNumber: bigint | null
  }

  export type QuranSajdaMinAggregateOutputType = {
    sajdaId: bigint | null
    surahNumber: bigint | null
    ayahNumber: bigint | null
    type: string | null
  }

  export type QuranSajdaMaxAggregateOutputType = {
    sajdaId: bigint | null
    surahNumber: bigint | null
    ayahNumber: bigint | null
    type: string | null
  }

  export type QuranSajdaCountAggregateOutputType = {
    sajdaId: number
    surahNumber: number
    ayahNumber: number
    type: number
    _all: number
  }


  export type QuranSajdaAvgAggregateInputType = {
    sajdaId?: true
    surahNumber?: true
    ayahNumber?: true
  }

  export type QuranSajdaSumAggregateInputType = {
    sajdaId?: true
    surahNumber?: true
    ayahNumber?: true
  }

  export type QuranSajdaMinAggregateInputType = {
    sajdaId?: true
    surahNumber?: true
    ayahNumber?: true
    type?: true
  }

  export type QuranSajdaMaxAggregateInputType = {
    sajdaId?: true
    surahNumber?: true
    ayahNumber?: true
    type?: true
  }

  export type QuranSajdaCountAggregateInputType = {
    sajdaId?: true
    surahNumber?: true
    ayahNumber?: true
    type?: true
    _all?: true
  }

  export type QuranSajdaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuranSajda to aggregate.
     */
    where?: QuranSajdaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuranSajdas to fetch.
     */
    orderBy?: QuranSajdaOrderByWithRelationInput | QuranSajdaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuranSajdaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuranSajdas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuranSajdas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuranSajdas
    **/
    _count?: true | QuranSajdaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuranSajdaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuranSajdaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuranSajdaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuranSajdaMaxAggregateInputType
  }

  export type GetQuranSajdaAggregateType<T extends QuranSajdaAggregateArgs> = {
        [P in keyof T & keyof AggregateQuranSajda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuranSajda[P]>
      : GetScalarType<T[P], AggregateQuranSajda[P]>
  }




  export type QuranSajdaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuranSajdaWhereInput
    orderBy?: QuranSajdaOrderByWithAggregationInput | QuranSajdaOrderByWithAggregationInput[]
    by: QuranSajdaScalarFieldEnum[] | QuranSajdaScalarFieldEnum
    having?: QuranSajdaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuranSajdaCountAggregateInputType | true
    _avg?: QuranSajdaAvgAggregateInputType
    _sum?: QuranSajdaSumAggregateInputType
    _min?: QuranSajdaMinAggregateInputType
    _max?: QuranSajdaMaxAggregateInputType
  }

  export type QuranSajdaGroupByOutputType = {
    sajdaId: bigint
    surahNumber: bigint | null
    ayahNumber: bigint | null
    type: string | null
    _count: QuranSajdaCountAggregateOutputType | null
    _avg: QuranSajdaAvgAggregateOutputType | null
    _sum: QuranSajdaSumAggregateOutputType | null
    _min: QuranSajdaMinAggregateOutputType | null
    _max: QuranSajdaMaxAggregateOutputType | null
  }

  type GetQuranSajdaGroupByPayload<T extends QuranSajdaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuranSajdaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuranSajdaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuranSajdaGroupByOutputType[P]>
            : GetScalarType<T[P], QuranSajdaGroupByOutputType[P]>
        }
      >
    >


  export type QuranSajdaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sajdaId?: boolean
    surahNumber?: boolean
    ayahNumber?: boolean
    type?: boolean
  }, ExtArgs["result"]["quranSajda"]>

  export type QuranSajdaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sajdaId?: boolean
    surahNumber?: boolean
    ayahNumber?: boolean
    type?: boolean
  }, ExtArgs["result"]["quranSajda"]>

  export type QuranSajdaSelectScalar = {
    sajdaId?: boolean
    surahNumber?: boolean
    ayahNumber?: boolean
    type?: boolean
  }


  export type $QuranSajdaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuranSajda"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      sajdaId: bigint
      surahNumber: bigint | null
      ayahNumber: bigint | null
      type: string | null
    }, ExtArgs["result"]["quranSajda"]>
    composites: {}
  }

  type QuranSajdaGetPayload<S extends boolean | null | undefined | QuranSajdaDefaultArgs> = $Result.GetResult<Prisma.$QuranSajdaPayload, S>

  type QuranSajdaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuranSajdaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuranSajdaCountAggregateInputType | true
    }

  export interface QuranSajdaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuranSajda'], meta: { name: 'QuranSajda' } }
    /**
     * Find zero or one QuranSajda that matches the filter.
     * @param {QuranSajdaFindUniqueArgs} args - Arguments to find a QuranSajda
     * @example
     * // Get one QuranSajda
     * const quranSajda = await prisma.quranSajda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuranSajdaFindUniqueArgs>(args: SelectSubset<T, QuranSajdaFindUniqueArgs<ExtArgs>>): Prisma__QuranSajdaClient<$Result.GetResult<Prisma.$QuranSajdaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QuranSajda that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuranSajdaFindUniqueOrThrowArgs} args - Arguments to find a QuranSajda
     * @example
     * // Get one QuranSajda
     * const quranSajda = await prisma.quranSajda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuranSajdaFindUniqueOrThrowArgs>(args: SelectSubset<T, QuranSajdaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuranSajdaClient<$Result.GetResult<Prisma.$QuranSajdaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QuranSajda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranSajdaFindFirstArgs} args - Arguments to find a QuranSajda
     * @example
     * // Get one QuranSajda
     * const quranSajda = await prisma.quranSajda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuranSajdaFindFirstArgs>(args?: SelectSubset<T, QuranSajdaFindFirstArgs<ExtArgs>>): Prisma__QuranSajdaClient<$Result.GetResult<Prisma.$QuranSajdaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QuranSajda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranSajdaFindFirstOrThrowArgs} args - Arguments to find a QuranSajda
     * @example
     * // Get one QuranSajda
     * const quranSajda = await prisma.quranSajda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuranSajdaFindFirstOrThrowArgs>(args?: SelectSubset<T, QuranSajdaFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuranSajdaClient<$Result.GetResult<Prisma.$QuranSajdaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QuranSajdas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranSajdaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuranSajdas
     * const quranSajdas = await prisma.quranSajda.findMany()
     * 
     * // Get first 10 QuranSajdas
     * const quranSajdas = await prisma.quranSajda.findMany({ take: 10 })
     * 
     * // Only select the `sajdaId`
     * const quranSajdaWithSajdaIdOnly = await prisma.quranSajda.findMany({ select: { sajdaId: true } })
     * 
     */
    findMany<T extends QuranSajdaFindManyArgs>(args?: SelectSubset<T, QuranSajdaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuranSajdaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QuranSajda.
     * @param {QuranSajdaCreateArgs} args - Arguments to create a QuranSajda.
     * @example
     * // Create one QuranSajda
     * const QuranSajda = await prisma.quranSajda.create({
     *   data: {
     *     // ... data to create a QuranSajda
     *   }
     * })
     * 
     */
    create<T extends QuranSajdaCreateArgs>(args: SelectSubset<T, QuranSajdaCreateArgs<ExtArgs>>): Prisma__QuranSajdaClient<$Result.GetResult<Prisma.$QuranSajdaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QuranSajdas.
     * @param {QuranSajdaCreateManyArgs} args - Arguments to create many QuranSajdas.
     * @example
     * // Create many QuranSajdas
     * const quranSajda = await prisma.quranSajda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuranSajdaCreateManyArgs>(args?: SelectSubset<T, QuranSajdaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuranSajdas and returns the data saved in the database.
     * @param {QuranSajdaCreateManyAndReturnArgs} args - Arguments to create many QuranSajdas.
     * @example
     * // Create many QuranSajdas
     * const quranSajda = await prisma.quranSajda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuranSajdas and only return the `sajdaId`
     * const quranSajdaWithSajdaIdOnly = await prisma.quranSajda.createManyAndReturn({ 
     *   select: { sajdaId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuranSajdaCreateManyAndReturnArgs>(args?: SelectSubset<T, QuranSajdaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuranSajdaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a QuranSajda.
     * @param {QuranSajdaDeleteArgs} args - Arguments to delete one QuranSajda.
     * @example
     * // Delete one QuranSajda
     * const QuranSajda = await prisma.quranSajda.delete({
     *   where: {
     *     // ... filter to delete one QuranSajda
     *   }
     * })
     * 
     */
    delete<T extends QuranSajdaDeleteArgs>(args: SelectSubset<T, QuranSajdaDeleteArgs<ExtArgs>>): Prisma__QuranSajdaClient<$Result.GetResult<Prisma.$QuranSajdaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QuranSajda.
     * @param {QuranSajdaUpdateArgs} args - Arguments to update one QuranSajda.
     * @example
     * // Update one QuranSajda
     * const quranSajda = await prisma.quranSajda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuranSajdaUpdateArgs>(args: SelectSubset<T, QuranSajdaUpdateArgs<ExtArgs>>): Prisma__QuranSajdaClient<$Result.GetResult<Prisma.$QuranSajdaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QuranSajdas.
     * @param {QuranSajdaDeleteManyArgs} args - Arguments to filter QuranSajdas to delete.
     * @example
     * // Delete a few QuranSajdas
     * const { count } = await prisma.quranSajda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuranSajdaDeleteManyArgs>(args?: SelectSubset<T, QuranSajdaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuranSajdas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranSajdaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuranSajdas
     * const quranSajda = await prisma.quranSajda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuranSajdaUpdateManyArgs>(args: SelectSubset<T, QuranSajdaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuranSajda.
     * @param {QuranSajdaUpsertArgs} args - Arguments to update or create a QuranSajda.
     * @example
     * // Update or create a QuranSajda
     * const quranSajda = await prisma.quranSajda.upsert({
     *   create: {
     *     // ... data to create a QuranSajda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuranSajda we want to update
     *   }
     * })
     */
    upsert<T extends QuranSajdaUpsertArgs>(args: SelectSubset<T, QuranSajdaUpsertArgs<ExtArgs>>): Prisma__QuranSajdaClient<$Result.GetResult<Prisma.$QuranSajdaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of QuranSajdas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranSajdaCountArgs} args - Arguments to filter QuranSajdas to count.
     * @example
     * // Count the number of QuranSajdas
     * const count = await prisma.quranSajda.count({
     *   where: {
     *     // ... the filter for the QuranSajdas we want to count
     *   }
     * })
    **/
    count<T extends QuranSajdaCountArgs>(
      args?: Subset<T, QuranSajdaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuranSajdaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuranSajda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranSajdaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuranSajdaAggregateArgs>(args: Subset<T, QuranSajdaAggregateArgs>): Prisma.PrismaPromise<GetQuranSajdaAggregateType<T>>

    /**
     * Group by QuranSajda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranSajdaGroupByArgs} args - Group by arguments.
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
      T extends QuranSajdaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuranSajdaGroupByArgs['orderBy'] }
        : { orderBy?: QuranSajdaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuranSajdaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuranSajdaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuranSajda model
   */
  readonly fields: QuranSajdaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuranSajda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuranSajdaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the QuranSajda model
   */ 
  interface QuranSajdaFieldRefs {
    readonly sajdaId: FieldRef<"QuranSajda", 'BigInt'>
    readonly surahNumber: FieldRef<"QuranSajda", 'BigInt'>
    readonly ayahNumber: FieldRef<"QuranSajda", 'BigInt'>
    readonly type: FieldRef<"QuranSajda", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuranSajda findUnique
   */
  export type QuranSajdaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSajda
     */
    select?: QuranSajdaSelect<ExtArgs> | null
    /**
     * Filter, which QuranSajda to fetch.
     */
    where: QuranSajdaWhereUniqueInput
  }

  /**
   * QuranSajda findUniqueOrThrow
   */
  export type QuranSajdaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSajda
     */
    select?: QuranSajdaSelect<ExtArgs> | null
    /**
     * Filter, which QuranSajda to fetch.
     */
    where: QuranSajdaWhereUniqueInput
  }

  /**
   * QuranSajda findFirst
   */
  export type QuranSajdaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSajda
     */
    select?: QuranSajdaSelect<ExtArgs> | null
    /**
     * Filter, which QuranSajda to fetch.
     */
    where?: QuranSajdaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuranSajdas to fetch.
     */
    orderBy?: QuranSajdaOrderByWithRelationInput | QuranSajdaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuranSajdas.
     */
    cursor?: QuranSajdaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuranSajdas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuranSajdas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuranSajdas.
     */
    distinct?: QuranSajdaScalarFieldEnum | QuranSajdaScalarFieldEnum[]
  }

  /**
   * QuranSajda findFirstOrThrow
   */
  export type QuranSajdaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSajda
     */
    select?: QuranSajdaSelect<ExtArgs> | null
    /**
     * Filter, which QuranSajda to fetch.
     */
    where?: QuranSajdaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuranSajdas to fetch.
     */
    orderBy?: QuranSajdaOrderByWithRelationInput | QuranSajdaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuranSajdas.
     */
    cursor?: QuranSajdaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuranSajdas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuranSajdas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuranSajdas.
     */
    distinct?: QuranSajdaScalarFieldEnum | QuranSajdaScalarFieldEnum[]
  }

  /**
   * QuranSajda findMany
   */
  export type QuranSajdaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSajda
     */
    select?: QuranSajdaSelect<ExtArgs> | null
    /**
     * Filter, which QuranSajdas to fetch.
     */
    where?: QuranSajdaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuranSajdas to fetch.
     */
    orderBy?: QuranSajdaOrderByWithRelationInput | QuranSajdaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuranSajdas.
     */
    cursor?: QuranSajdaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuranSajdas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuranSajdas.
     */
    skip?: number
    distinct?: QuranSajdaScalarFieldEnum | QuranSajdaScalarFieldEnum[]
  }

  /**
   * QuranSajda create
   */
  export type QuranSajdaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSajda
     */
    select?: QuranSajdaSelect<ExtArgs> | null
    /**
     * The data needed to create a QuranSajda.
     */
    data?: XOR<QuranSajdaCreateInput, QuranSajdaUncheckedCreateInput>
  }

  /**
   * QuranSajda createMany
   */
  export type QuranSajdaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuranSajdas.
     */
    data: QuranSajdaCreateManyInput | QuranSajdaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuranSajda createManyAndReturn
   */
  export type QuranSajdaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSajda
     */
    select?: QuranSajdaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many QuranSajdas.
     */
    data: QuranSajdaCreateManyInput | QuranSajdaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuranSajda update
   */
  export type QuranSajdaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSajda
     */
    select?: QuranSajdaSelect<ExtArgs> | null
    /**
     * The data needed to update a QuranSajda.
     */
    data: XOR<QuranSajdaUpdateInput, QuranSajdaUncheckedUpdateInput>
    /**
     * Choose, which QuranSajda to update.
     */
    where: QuranSajdaWhereUniqueInput
  }

  /**
   * QuranSajda updateMany
   */
  export type QuranSajdaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuranSajdas.
     */
    data: XOR<QuranSajdaUpdateManyMutationInput, QuranSajdaUncheckedUpdateManyInput>
    /**
     * Filter which QuranSajdas to update
     */
    where?: QuranSajdaWhereInput
  }

  /**
   * QuranSajda upsert
   */
  export type QuranSajdaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSajda
     */
    select?: QuranSajdaSelect<ExtArgs> | null
    /**
     * The filter to search for the QuranSajda to update in case it exists.
     */
    where: QuranSajdaWhereUniqueInput
    /**
     * In case the QuranSajda found by the `where` argument doesn't exist, create a new QuranSajda with this data.
     */
    create: XOR<QuranSajdaCreateInput, QuranSajdaUncheckedCreateInput>
    /**
     * In case the QuranSajda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuranSajdaUpdateInput, QuranSajdaUncheckedUpdateInput>
  }

  /**
   * QuranSajda delete
   */
  export type QuranSajdaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSajda
     */
    select?: QuranSajdaSelect<ExtArgs> | null
    /**
     * Filter which QuranSajda to delete.
     */
    where: QuranSajdaWhereUniqueInput
  }

  /**
   * QuranSajda deleteMany
   */
  export type QuranSajdaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuranSajdas to delete
     */
    where?: QuranSajdaWhereInput
  }

  /**
   * QuranSajda without action
   */
  export type QuranSajdaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSajda
     */
    select?: QuranSajdaSelect<ExtArgs> | null
  }


  /**
   * Model QuranSurah
   */

  export type AggregateQuranSurah = {
    _count: QuranSurahCountAggregateOutputType | null
    _avg: QuranSurahAvgAggregateOutputType | null
    _sum: QuranSurahSumAggregateOutputType | null
    _min: QuranSurahMinAggregateOutputType | null
    _max: QuranSurahMaxAggregateOutputType | null
  }

  export type QuranSurahAvgAggregateOutputType = {
    number: number | null
    ayas: number | null
    chronologicalOrder: number | null
    rukus: number | null
    startIndex: number | null
  }

  export type QuranSurahSumAggregateOutputType = {
    number: bigint | null
    ayas: bigint | null
    chronologicalOrder: bigint | null
    rukus: bigint | null
    startIndex: bigint | null
  }

  export type QuranSurahMinAggregateOutputType = {
    number: bigint | null
    arabicName: string | null
    transliteration: string | null
    englishName: string | null
    ayas: bigint | null
    revelationType: string | null
    chronologicalOrder: bigint | null
    rukus: bigint | null
    startIndex: bigint | null
  }

  export type QuranSurahMaxAggregateOutputType = {
    number: bigint | null
    arabicName: string | null
    transliteration: string | null
    englishName: string | null
    ayas: bigint | null
    revelationType: string | null
    chronologicalOrder: bigint | null
    rukus: bigint | null
    startIndex: bigint | null
  }

  export type QuranSurahCountAggregateOutputType = {
    number: number
    arabicName: number
    transliteration: number
    englishName: number
    ayas: number
    revelationType: number
    chronologicalOrder: number
    rukus: number
    startIndex: number
    _all: number
  }


  export type QuranSurahAvgAggregateInputType = {
    number?: true
    ayas?: true
    chronologicalOrder?: true
    rukus?: true
    startIndex?: true
  }

  export type QuranSurahSumAggregateInputType = {
    number?: true
    ayas?: true
    chronologicalOrder?: true
    rukus?: true
    startIndex?: true
  }

  export type QuranSurahMinAggregateInputType = {
    number?: true
    arabicName?: true
    transliteration?: true
    englishName?: true
    ayas?: true
    revelationType?: true
    chronologicalOrder?: true
    rukus?: true
    startIndex?: true
  }

  export type QuranSurahMaxAggregateInputType = {
    number?: true
    arabicName?: true
    transliteration?: true
    englishName?: true
    ayas?: true
    revelationType?: true
    chronologicalOrder?: true
    rukus?: true
    startIndex?: true
  }

  export type QuranSurahCountAggregateInputType = {
    number?: true
    arabicName?: true
    transliteration?: true
    englishName?: true
    ayas?: true
    revelationType?: true
    chronologicalOrder?: true
    rukus?: true
    startIndex?: true
    _all?: true
  }

  export type QuranSurahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuranSurah to aggregate.
     */
    where?: QuranSurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuranSurahs to fetch.
     */
    orderBy?: QuranSurahOrderByWithRelationInput | QuranSurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuranSurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuranSurahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuranSurahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuranSurahs
    **/
    _count?: true | QuranSurahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuranSurahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuranSurahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuranSurahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuranSurahMaxAggregateInputType
  }

  export type GetQuranSurahAggregateType<T extends QuranSurahAggregateArgs> = {
        [P in keyof T & keyof AggregateQuranSurah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuranSurah[P]>
      : GetScalarType<T[P], AggregateQuranSurah[P]>
  }




  export type QuranSurahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuranSurahWhereInput
    orderBy?: QuranSurahOrderByWithAggregationInput | QuranSurahOrderByWithAggregationInput[]
    by: QuranSurahScalarFieldEnum[] | QuranSurahScalarFieldEnum
    having?: QuranSurahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuranSurahCountAggregateInputType | true
    _avg?: QuranSurahAvgAggregateInputType
    _sum?: QuranSurahSumAggregateInputType
    _min?: QuranSurahMinAggregateInputType
    _max?: QuranSurahMaxAggregateInputType
  }

  export type QuranSurahGroupByOutputType = {
    number: bigint
    arabicName: string | null
    transliteration: string | null
    englishName: string | null
    ayas: bigint | null
    revelationType: string | null
    chronologicalOrder: bigint | null
    rukus: bigint | null
    startIndex: bigint | null
    _count: QuranSurahCountAggregateOutputType | null
    _avg: QuranSurahAvgAggregateOutputType | null
    _sum: QuranSurahSumAggregateOutputType | null
    _min: QuranSurahMinAggregateOutputType | null
    _max: QuranSurahMaxAggregateOutputType | null
  }

  type GetQuranSurahGroupByPayload<T extends QuranSurahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuranSurahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuranSurahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuranSurahGroupByOutputType[P]>
            : GetScalarType<T[P], QuranSurahGroupByOutputType[P]>
        }
      >
    >


  export type QuranSurahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    arabicName?: boolean
    transliteration?: boolean
    englishName?: boolean
    ayas?: boolean
    revelationType?: boolean
    chronologicalOrder?: boolean
    rukus?: boolean
    startIndex?: boolean
  }, ExtArgs["result"]["quranSurah"]>

  export type QuranSurahSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    arabicName?: boolean
    transliteration?: boolean
    englishName?: boolean
    ayas?: boolean
    revelationType?: boolean
    chronologicalOrder?: boolean
    rukus?: boolean
    startIndex?: boolean
  }, ExtArgs["result"]["quranSurah"]>

  export type QuranSurahSelectScalar = {
    number?: boolean
    arabicName?: boolean
    transliteration?: boolean
    englishName?: boolean
    ayas?: boolean
    revelationType?: boolean
    chronologicalOrder?: boolean
    rukus?: boolean
    startIndex?: boolean
  }


  export type $QuranSurahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuranSurah"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      number: bigint
      arabicName: string | null
      transliteration: string | null
      englishName: string | null
      ayas: bigint | null
      revelationType: string | null
      chronologicalOrder: bigint | null
      rukus: bigint | null
      startIndex: bigint | null
    }, ExtArgs["result"]["quranSurah"]>
    composites: {}
  }

  type QuranSurahGetPayload<S extends boolean | null | undefined | QuranSurahDefaultArgs> = $Result.GetResult<Prisma.$QuranSurahPayload, S>

  type QuranSurahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuranSurahFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuranSurahCountAggregateInputType | true
    }

  export interface QuranSurahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuranSurah'], meta: { name: 'QuranSurah' } }
    /**
     * Find zero or one QuranSurah that matches the filter.
     * @param {QuranSurahFindUniqueArgs} args - Arguments to find a QuranSurah
     * @example
     * // Get one QuranSurah
     * const quranSurah = await prisma.quranSurah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuranSurahFindUniqueArgs>(args: SelectSubset<T, QuranSurahFindUniqueArgs<ExtArgs>>): Prisma__QuranSurahClient<$Result.GetResult<Prisma.$QuranSurahPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QuranSurah that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuranSurahFindUniqueOrThrowArgs} args - Arguments to find a QuranSurah
     * @example
     * // Get one QuranSurah
     * const quranSurah = await prisma.quranSurah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuranSurahFindUniqueOrThrowArgs>(args: SelectSubset<T, QuranSurahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuranSurahClient<$Result.GetResult<Prisma.$QuranSurahPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QuranSurah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranSurahFindFirstArgs} args - Arguments to find a QuranSurah
     * @example
     * // Get one QuranSurah
     * const quranSurah = await prisma.quranSurah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuranSurahFindFirstArgs>(args?: SelectSubset<T, QuranSurahFindFirstArgs<ExtArgs>>): Prisma__QuranSurahClient<$Result.GetResult<Prisma.$QuranSurahPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QuranSurah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranSurahFindFirstOrThrowArgs} args - Arguments to find a QuranSurah
     * @example
     * // Get one QuranSurah
     * const quranSurah = await prisma.quranSurah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuranSurahFindFirstOrThrowArgs>(args?: SelectSubset<T, QuranSurahFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuranSurahClient<$Result.GetResult<Prisma.$QuranSurahPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QuranSurahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranSurahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuranSurahs
     * const quranSurahs = await prisma.quranSurah.findMany()
     * 
     * // Get first 10 QuranSurahs
     * const quranSurahs = await prisma.quranSurah.findMany({ take: 10 })
     * 
     * // Only select the `number`
     * const quranSurahWithNumberOnly = await prisma.quranSurah.findMany({ select: { number: true } })
     * 
     */
    findMany<T extends QuranSurahFindManyArgs>(args?: SelectSubset<T, QuranSurahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuranSurahPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QuranSurah.
     * @param {QuranSurahCreateArgs} args - Arguments to create a QuranSurah.
     * @example
     * // Create one QuranSurah
     * const QuranSurah = await prisma.quranSurah.create({
     *   data: {
     *     // ... data to create a QuranSurah
     *   }
     * })
     * 
     */
    create<T extends QuranSurahCreateArgs>(args: SelectSubset<T, QuranSurahCreateArgs<ExtArgs>>): Prisma__QuranSurahClient<$Result.GetResult<Prisma.$QuranSurahPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QuranSurahs.
     * @param {QuranSurahCreateManyArgs} args - Arguments to create many QuranSurahs.
     * @example
     * // Create many QuranSurahs
     * const quranSurah = await prisma.quranSurah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuranSurahCreateManyArgs>(args?: SelectSubset<T, QuranSurahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuranSurahs and returns the data saved in the database.
     * @param {QuranSurahCreateManyAndReturnArgs} args - Arguments to create many QuranSurahs.
     * @example
     * // Create many QuranSurahs
     * const quranSurah = await prisma.quranSurah.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuranSurahs and only return the `number`
     * const quranSurahWithNumberOnly = await prisma.quranSurah.createManyAndReturn({ 
     *   select: { number: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuranSurahCreateManyAndReturnArgs>(args?: SelectSubset<T, QuranSurahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuranSurahPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a QuranSurah.
     * @param {QuranSurahDeleteArgs} args - Arguments to delete one QuranSurah.
     * @example
     * // Delete one QuranSurah
     * const QuranSurah = await prisma.quranSurah.delete({
     *   where: {
     *     // ... filter to delete one QuranSurah
     *   }
     * })
     * 
     */
    delete<T extends QuranSurahDeleteArgs>(args: SelectSubset<T, QuranSurahDeleteArgs<ExtArgs>>): Prisma__QuranSurahClient<$Result.GetResult<Prisma.$QuranSurahPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QuranSurah.
     * @param {QuranSurahUpdateArgs} args - Arguments to update one QuranSurah.
     * @example
     * // Update one QuranSurah
     * const quranSurah = await prisma.quranSurah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuranSurahUpdateArgs>(args: SelectSubset<T, QuranSurahUpdateArgs<ExtArgs>>): Prisma__QuranSurahClient<$Result.GetResult<Prisma.$QuranSurahPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QuranSurahs.
     * @param {QuranSurahDeleteManyArgs} args - Arguments to filter QuranSurahs to delete.
     * @example
     * // Delete a few QuranSurahs
     * const { count } = await prisma.quranSurah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuranSurahDeleteManyArgs>(args?: SelectSubset<T, QuranSurahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuranSurahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranSurahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuranSurahs
     * const quranSurah = await prisma.quranSurah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuranSurahUpdateManyArgs>(args: SelectSubset<T, QuranSurahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuranSurah.
     * @param {QuranSurahUpsertArgs} args - Arguments to update or create a QuranSurah.
     * @example
     * // Update or create a QuranSurah
     * const quranSurah = await prisma.quranSurah.upsert({
     *   create: {
     *     // ... data to create a QuranSurah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuranSurah we want to update
     *   }
     * })
     */
    upsert<T extends QuranSurahUpsertArgs>(args: SelectSubset<T, QuranSurahUpsertArgs<ExtArgs>>): Prisma__QuranSurahClient<$Result.GetResult<Prisma.$QuranSurahPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of QuranSurahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranSurahCountArgs} args - Arguments to filter QuranSurahs to count.
     * @example
     * // Count the number of QuranSurahs
     * const count = await prisma.quranSurah.count({
     *   where: {
     *     // ... the filter for the QuranSurahs we want to count
     *   }
     * })
    **/
    count<T extends QuranSurahCountArgs>(
      args?: Subset<T, QuranSurahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuranSurahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuranSurah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranSurahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuranSurahAggregateArgs>(args: Subset<T, QuranSurahAggregateArgs>): Prisma.PrismaPromise<GetQuranSurahAggregateType<T>>

    /**
     * Group by QuranSurah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranSurahGroupByArgs} args - Group by arguments.
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
      T extends QuranSurahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuranSurahGroupByArgs['orderBy'] }
        : { orderBy?: QuranSurahGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuranSurahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuranSurahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuranSurah model
   */
  readonly fields: QuranSurahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuranSurah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuranSurahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the QuranSurah model
   */ 
  interface QuranSurahFieldRefs {
    readonly number: FieldRef<"QuranSurah", 'BigInt'>
    readonly arabicName: FieldRef<"QuranSurah", 'String'>
    readonly transliteration: FieldRef<"QuranSurah", 'String'>
    readonly englishName: FieldRef<"QuranSurah", 'String'>
    readonly ayas: FieldRef<"QuranSurah", 'BigInt'>
    readonly revelationType: FieldRef<"QuranSurah", 'String'>
    readonly chronologicalOrder: FieldRef<"QuranSurah", 'BigInt'>
    readonly rukus: FieldRef<"QuranSurah", 'BigInt'>
    readonly startIndex: FieldRef<"QuranSurah", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * QuranSurah findUnique
   */
  export type QuranSurahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSurah
     */
    select?: QuranSurahSelect<ExtArgs> | null
    /**
     * Filter, which QuranSurah to fetch.
     */
    where: QuranSurahWhereUniqueInput
  }

  /**
   * QuranSurah findUniqueOrThrow
   */
  export type QuranSurahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSurah
     */
    select?: QuranSurahSelect<ExtArgs> | null
    /**
     * Filter, which QuranSurah to fetch.
     */
    where: QuranSurahWhereUniqueInput
  }

  /**
   * QuranSurah findFirst
   */
  export type QuranSurahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSurah
     */
    select?: QuranSurahSelect<ExtArgs> | null
    /**
     * Filter, which QuranSurah to fetch.
     */
    where?: QuranSurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuranSurahs to fetch.
     */
    orderBy?: QuranSurahOrderByWithRelationInput | QuranSurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuranSurahs.
     */
    cursor?: QuranSurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuranSurahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuranSurahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuranSurahs.
     */
    distinct?: QuranSurahScalarFieldEnum | QuranSurahScalarFieldEnum[]
  }

  /**
   * QuranSurah findFirstOrThrow
   */
  export type QuranSurahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSurah
     */
    select?: QuranSurahSelect<ExtArgs> | null
    /**
     * Filter, which QuranSurah to fetch.
     */
    where?: QuranSurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuranSurahs to fetch.
     */
    orderBy?: QuranSurahOrderByWithRelationInput | QuranSurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuranSurahs.
     */
    cursor?: QuranSurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuranSurahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuranSurahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuranSurahs.
     */
    distinct?: QuranSurahScalarFieldEnum | QuranSurahScalarFieldEnum[]
  }

  /**
   * QuranSurah findMany
   */
  export type QuranSurahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSurah
     */
    select?: QuranSurahSelect<ExtArgs> | null
    /**
     * Filter, which QuranSurahs to fetch.
     */
    where?: QuranSurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuranSurahs to fetch.
     */
    orderBy?: QuranSurahOrderByWithRelationInput | QuranSurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuranSurahs.
     */
    cursor?: QuranSurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuranSurahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuranSurahs.
     */
    skip?: number
    distinct?: QuranSurahScalarFieldEnum | QuranSurahScalarFieldEnum[]
  }

  /**
   * QuranSurah create
   */
  export type QuranSurahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSurah
     */
    select?: QuranSurahSelect<ExtArgs> | null
    /**
     * The data needed to create a QuranSurah.
     */
    data?: XOR<QuranSurahCreateInput, QuranSurahUncheckedCreateInput>
  }

  /**
   * QuranSurah createMany
   */
  export type QuranSurahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuranSurahs.
     */
    data: QuranSurahCreateManyInput | QuranSurahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuranSurah createManyAndReturn
   */
  export type QuranSurahCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSurah
     */
    select?: QuranSurahSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many QuranSurahs.
     */
    data: QuranSurahCreateManyInput | QuranSurahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuranSurah update
   */
  export type QuranSurahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSurah
     */
    select?: QuranSurahSelect<ExtArgs> | null
    /**
     * The data needed to update a QuranSurah.
     */
    data: XOR<QuranSurahUpdateInput, QuranSurahUncheckedUpdateInput>
    /**
     * Choose, which QuranSurah to update.
     */
    where: QuranSurahWhereUniqueInput
  }

  /**
   * QuranSurah updateMany
   */
  export type QuranSurahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuranSurahs.
     */
    data: XOR<QuranSurahUpdateManyMutationInput, QuranSurahUncheckedUpdateManyInput>
    /**
     * Filter which QuranSurahs to update
     */
    where?: QuranSurahWhereInput
  }

  /**
   * QuranSurah upsert
   */
  export type QuranSurahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSurah
     */
    select?: QuranSurahSelect<ExtArgs> | null
    /**
     * The filter to search for the QuranSurah to update in case it exists.
     */
    where: QuranSurahWhereUniqueInput
    /**
     * In case the QuranSurah found by the `where` argument doesn't exist, create a new QuranSurah with this data.
     */
    create: XOR<QuranSurahCreateInput, QuranSurahUncheckedCreateInput>
    /**
     * In case the QuranSurah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuranSurahUpdateInput, QuranSurahUncheckedUpdateInput>
  }

  /**
   * QuranSurah delete
   */
  export type QuranSurahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSurah
     */
    select?: QuranSurahSelect<ExtArgs> | null
    /**
     * Filter which QuranSurah to delete.
     */
    where: QuranSurahWhereUniqueInput
  }

  /**
   * QuranSurah deleteMany
   */
  export type QuranSurahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuranSurahs to delete
     */
    where?: QuranSurahWhereInput
  }

  /**
   * QuranSurah without action
   */
  export type QuranSurahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranSurah
     */
    select?: QuranSurahSelect<ExtArgs> | null
  }


  /**
   * Model QuranText
   */

  export type AggregateQuranText = {
    _count: QuranTextCountAggregateOutputType | null
    _avg: QuranTextAvgAggregateOutputType | null
    _sum: QuranTextSumAggregateOutputType | null
    _min: QuranTextMinAggregateOutputType | null
    _max: QuranTextMaxAggregateOutputType | null
  }

  export type QuranTextAvgAggregateOutputType = {
    id: number | null
    sura: number | null
    aya: number | null
  }

  export type QuranTextSumAggregateOutputType = {
    id: bigint | null
    sura: bigint | null
    aya: bigint | null
  }

  export type QuranTextMinAggregateOutputType = {
    id: bigint | null
    sura: bigint | null
    aya: bigint | null
    text: string | null
  }

  export type QuranTextMaxAggregateOutputType = {
    id: bigint | null
    sura: bigint | null
    aya: bigint | null
    text: string | null
  }

  export type QuranTextCountAggregateOutputType = {
    id: number
    sura: number
    aya: number
    text: number
    _all: number
  }


  export type QuranTextAvgAggregateInputType = {
    id?: true
    sura?: true
    aya?: true
  }

  export type QuranTextSumAggregateInputType = {
    id?: true
    sura?: true
    aya?: true
  }

  export type QuranTextMinAggregateInputType = {
    id?: true
    sura?: true
    aya?: true
    text?: true
  }

  export type QuranTextMaxAggregateInputType = {
    id?: true
    sura?: true
    aya?: true
    text?: true
  }

  export type QuranTextCountAggregateInputType = {
    id?: true
    sura?: true
    aya?: true
    text?: true
    _all?: true
  }

  export type QuranTextAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuranText to aggregate.
     */
    where?: QuranTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuranTexts to fetch.
     */
    orderBy?: QuranTextOrderByWithRelationInput | QuranTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuranTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuranTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuranTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuranTexts
    **/
    _count?: true | QuranTextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuranTextAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuranTextSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuranTextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuranTextMaxAggregateInputType
  }

  export type GetQuranTextAggregateType<T extends QuranTextAggregateArgs> = {
        [P in keyof T & keyof AggregateQuranText]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuranText[P]>
      : GetScalarType<T[P], AggregateQuranText[P]>
  }




  export type QuranTextGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuranTextWhereInput
    orderBy?: QuranTextOrderByWithAggregationInput | QuranTextOrderByWithAggregationInput[]
    by: QuranTextScalarFieldEnum[] | QuranTextScalarFieldEnum
    having?: QuranTextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuranTextCountAggregateInputType | true
    _avg?: QuranTextAvgAggregateInputType
    _sum?: QuranTextSumAggregateInputType
    _min?: QuranTextMinAggregateInputType
    _max?: QuranTextMaxAggregateInputType
  }

  export type QuranTextGroupByOutputType = {
    id: bigint
    sura: bigint | null
    aya: bigint | null
    text: string | null
    _count: QuranTextCountAggregateOutputType | null
    _avg: QuranTextAvgAggregateOutputType | null
    _sum: QuranTextSumAggregateOutputType | null
    _min: QuranTextMinAggregateOutputType | null
    _max: QuranTextMaxAggregateOutputType | null
  }

  type GetQuranTextGroupByPayload<T extends QuranTextGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuranTextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuranTextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuranTextGroupByOutputType[P]>
            : GetScalarType<T[P], QuranTextGroupByOutputType[P]>
        }
      >
    >


  export type QuranTextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sura?: boolean
    aya?: boolean
    text?: boolean
  }, ExtArgs["result"]["quranText"]>

  export type QuranTextSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sura?: boolean
    aya?: boolean
    text?: boolean
  }, ExtArgs["result"]["quranText"]>

  export type QuranTextSelectScalar = {
    id?: boolean
    sura?: boolean
    aya?: boolean
    text?: boolean
  }


  export type $QuranTextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuranText"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      sura: bigint | null
      aya: bigint | null
      text: string | null
    }, ExtArgs["result"]["quranText"]>
    composites: {}
  }

  type QuranTextGetPayload<S extends boolean | null | undefined | QuranTextDefaultArgs> = $Result.GetResult<Prisma.$QuranTextPayload, S>

  type QuranTextCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuranTextFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuranTextCountAggregateInputType | true
    }

  export interface QuranTextDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuranText'], meta: { name: 'QuranText' } }
    /**
     * Find zero or one QuranText that matches the filter.
     * @param {QuranTextFindUniqueArgs} args - Arguments to find a QuranText
     * @example
     * // Get one QuranText
     * const quranText = await prisma.quranText.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuranTextFindUniqueArgs>(args: SelectSubset<T, QuranTextFindUniqueArgs<ExtArgs>>): Prisma__QuranTextClient<$Result.GetResult<Prisma.$QuranTextPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QuranText that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuranTextFindUniqueOrThrowArgs} args - Arguments to find a QuranText
     * @example
     * // Get one QuranText
     * const quranText = await prisma.quranText.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuranTextFindUniqueOrThrowArgs>(args: SelectSubset<T, QuranTextFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuranTextClient<$Result.GetResult<Prisma.$QuranTextPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QuranText that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranTextFindFirstArgs} args - Arguments to find a QuranText
     * @example
     * // Get one QuranText
     * const quranText = await prisma.quranText.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuranTextFindFirstArgs>(args?: SelectSubset<T, QuranTextFindFirstArgs<ExtArgs>>): Prisma__QuranTextClient<$Result.GetResult<Prisma.$QuranTextPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QuranText that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranTextFindFirstOrThrowArgs} args - Arguments to find a QuranText
     * @example
     * // Get one QuranText
     * const quranText = await prisma.quranText.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuranTextFindFirstOrThrowArgs>(args?: SelectSubset<T, QuranTextFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuranTextClient<$Result.GetResult<Prisma.$QuranTextPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QuranTexts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranTextFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuranTexts
     * const quranTexts = await prisma.quranText.findMany()
     * 
     * // Get first 10 QuranTexts
     * const quranTexts = await prisma.quranText.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quranTextWithIdOnly = await prisma.quranText.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuranTextFindManyArgs>(args?: SelectSubset<T, QuranTextFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuranTextPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QuranText.
     * @param {QuranTextCreateArgs} args - Arguments to create a QuranText.
     * @example
     * // Create one QuranText
     * const QuranText = await prisma.quranText.create({
     *   data: {
     *     // ... data to create a QuranText
     *   }
     * })
     * 
     */
    create<T extends QuranTextCreateArgs>(args: SelectSubset<T, QuranTextCreateArgs<ExtArgs>>): Prisma__QuranTextClient<$Result.GetResult<Prisma.$QuranTextPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QuranTexts.
     * @param {QuranTextCreateManyArgs} args - Arguments to create many QuranTexts.
     * @example
     * // Create many QuranTexts
     * const quranText = await prisma.quranText.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuranTextCreateManyArgs>(args?: SelectSubset<T, QuranTextCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuranTexts and returns the data saved in the database.
     * @param {QuranTextCreateManyAndReturnArgs} args - Arguments to create many QuranTexts.
     * @example
     * // Create many QuranTexts
     * const quranText = await prisma.quranText.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuranTexts and only return the `id`
     * const quranTextWithIdOnly = await prisma.quranText.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuranTextCreateManyAndReturnArgs>(args?: SelectSubset<T, QuranTextCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuranTextPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a QuranText.
     * @param {QuranTextDeleteArgs} args - Arguments to delete one QuranText.
     * @example
     * // Delete one QuranText
     * const QuranText = await prisma.quranText.delete({
     *   where: {
     *     // ... filter to delete one QuranText
     *   }
     * })
     * 
     */
    delete<T extends QuranTextDeleteArgs>(args: SelectSubset<T, QuranTextDeleteArgs<ExtArgs>>): Prisma__QuranTextClient<$Result.GetResult<Prisma.$QuranTextPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QuranText.
     * @param {QuranTextUpdateArgs} args - Arguments to update one QuranText.
     * @example
     * // Update one QuranText
     * const quranText = await prisma.quranText.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuranTextUpdateArgs>(args: SelectSubset<T, QuranTextUpdateArgs<ExtArgs>>): Prisma__QuranTextClient<$Result.GetResult<Prisma.$QuranTextPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QuranTexts.
     * @param {QuranTextDeleteManyArgs} args - Arguments to filter QuranTexts to delete.
     * @example
     * // Delete a few QuranTexts
     * const { count } = await prisma.quranText.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuranTextDeleteManyArgs>(args?: SelectSubset<T, QuranTextDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuranTexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranTextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuranTexts
     * const quranText = await prisma.quranText.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuranTextUpdateManyArgs>(args: SelectSubset<T, QuranTextUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuranText.
     * @param {QuranTextUpsertArgs} args - Arguments to update or create a QuranText.
     * @example
     * // Update or create a QuranText
     * const quranText = await prisma.quranText.upsert({
     *   create: {
     *     // ... data to create a QuranText
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuranText we want to update
     *   }
     * })
     */
    upsert<T extends QuranTextUpsertArgs>(args: SelectSubset<T, QuranTextUpsertArgs<ExtArgs>>): Prisma__QuranTextClient<$Result.GetResult<Prisma.$QuranTextPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of QuranTexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranTextCountArgs} args - Arguments to filter QuranTexts to count.
     * @example
     * // Count the number of QuranTexts
     * const count = await prisma.quranText.count({
     *   where: {
     *     // ... the filter for the QuranTexts we want to count
     *   }
     * })
    **/
    count<T extends QuranTextCountArgs>(
      args?: Subset<T, QuranTextCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuranTextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuranText.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranTextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuranTextAggregateArgs>(args: Subset<T, QuranTextAggregateArgs>): Prisma.PrismaPromise<GetQuranTextAggregateType<T>>

    /**
     * Group by QuranText.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranTextGroupByArgs} args - Group by arguments.
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
      T extends QuranTextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuranTextGroupByArgs['orderBy'] }
        : { orderBy?: QuranTextGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuranTextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuranTextGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuranText model
   */
  readonly fields: QuranTextFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuranText.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuranTextClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the QuranText model
   */ 
  interface QuranTextFieldRefs {
    readonly id: FieldRef<"QuranText", 'BigInt'>
    readonly sura: FieldRef<"QuranText", 'BigInt'>
    readonly aya: FieldRef<"QuranText", 'BigInt'>
    readonly text: FieldRef<"QuranText", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuranText findUnique
   */
  export type QuranTextFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranText
     */
    select?: QuranTextSelect<ExtArgs> | null
    /**
     * Filter, which QuranText to fetch.
     */
    where: QuranTextWhereUniqueInput
  }

  /**
   * QuranText findUniqueOrThrow
   */
  export type QuranTextFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranText
     */
    select?: QuranTextSelect<ExtArgs> | null
    /**
     * Filter, which QuranText to fetch.
     */
    where: QuranTextWhereUniqueInput
  }

  /**
   * QuranText findFirst
   */
  export type QuranTextFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranText
     */
    select?: QuranTextSelect<ExtArgs> | null
    /**
     * Filter, which QuranText to fetch.
     */
    where?: QuranTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuranTexts to fetch.
     */
    orderBy?: QuranTextOrderByWithRelationInput | QuranTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuranTexts.
     */
    cursor?: QuranTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuranTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuranTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuranTexts.
     */
    distinct?: QuranTextScalarFieldEnum | QuranTextScalarFieldEnum[]
  }

  /**
   * QuranText findFirstOrThrow
   */
  export type QuranTextFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranText
     */
    select?: QuranTextSelect<ExtArgs> | null
    /**
     * Filter, which QuranText to fetch.
     */
    where?: QuranTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuranTexts to fetch.
     */
    orderBy?: QuranTextOrderByWithRelationInput | QuranTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuranTexts.
     */
    cursor?: QuranTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuranTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuranTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuranTexts.
     */
    distinct?: QuranTextScalarFieldEnum | QuranTextScalarFieldEnum[]
  }

  /**
   * QuranText findMany
   */
  export type QuranTextFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranText
     */
    select?: QuranTextSelect<ExtArgs> | null
    /**
     * Filter, which QuranTexts to fetch.
     */
    where?: QuranTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuranTexts to fetch.
     */
    orderBy?: QuranTextOrderByWithRelationInput | QuranTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuranTexts.
     */
    cursor?: QuranTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuranTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuranTexts.
     */
    skip?: number
    distinct?: QuranTextScalarFieldEnum | QuranTextScalarFieldEnum[]
  }

  /**
   * QuranText create
   */
  export type QuranTextCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranText
     */
    select?: QuranTextSelect<ExtArgs> | null
    /**
     * The data needed to create a QuranText.
     */
    data?: XOR<QuranTextCreateInput, QuranTextUncheckedCreateInput>
  }

  /**
   * QuranText createMany
   */
  export type QuranTextCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuranTexts.
     */
    data: QuranTextCreateManyInput | QuranTextCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuranText createManyAndReturn
   */
  export type QuranTextCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranText
     */
    select?: QuranTextSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many QuranTexts.
     */
    data: QuranTextCreateManyInput | QuranTextCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuranText update
   */
  export type QuranTextUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranText
     */
    select?: QuranTextSelect<ExtArgs> | null
    /**
     * The data needed to update a QuranText.
     */
    data: XOR<QuranTextUpdateInput, QuranTextUncheckedUpdateInput>
    /**
     * Choose, which QuranText to update.
     */
    where: QuranTextWhereUniqueInput
  }

  /**
   * QuranText updateMany
   */
  export type QuranTextUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuranTexts.
     */
    data: XOR<QuranTextUpdateManyMutationInput, QuranTextUncheckedUpdateManyInput>
    /**
     * Filter which QuranTexts to update
     */
    where?: QuranTextWhereInput
  }

  /**
   * QuranText upsert
   */
  export type QuranTextUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranText
     */
    select?: QuranTextSelect<ExtArgs> | null
    /**
     * The filter to search for the QuranText to update in case it exists.
     */
    where: QuranTextWhereUniqueInput
    /**
     * In case the QuranText found by the `where` argument doesn't exist, create a new QuranText with this data.
     */
    create: XOR<QuranTextCreateInput, QuranTextUncheckedCreateInput>
    /**
     * In case the QuranText was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuranTextUpdateInput, QuranTextUncheckedUpdateInput>
  }

  /**
   * QuranText delete
   */
  export type QuranTextDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranText
     */
    select?: QuranTextSelect<ExtArgs> | null
    /**
     * Filter which QuranText to delete.
     */
    where: QuranTextWhereUniqueInput
  }

  /**
   * QuranText deleteMany
   */
  export type QuranTextDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuranTexts to delete
     */
    where?: QuranTextWhereInput
  }

  /**
   * QuranText without action
   */
  export type QuranTextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranText
     */
    select?: QuranTextSelect<ExtArgs> | null
  }


  /**
   * Model SurahDescription
   */

  export type AggregateSurahDescription = {
    _count: SurahDescriptionCountAggregateOutputType | null
    _avg: SurahDescriptionAvgAggregateOutputType | null
    _sum: SurahDescriptionSumAggregateOutputType | null
    _min: SurahDescriptionMinAggregateOutputType | null
    _max: SurahDescriptionMaxAggregateOutputType | null
  }

  export type SurahDescriptionAvgAggregateOutputType = {
    surahId: number | null
  }

  export type SurahDescriptionSumAggregateOutputType = {
    surahId: bigint | null
  }

  export type SurahDescriptionMinAggregateOutputType = {
    surahId: bigint | null
    description: string | null
    updatedAt: Date | null
  }

  export type SurahDescriptionMaxAggregateOutputType = {
    surahId: bigint | null
    description: string | null
    updatedAt: Date | null
  }

  export type SurahDescriptionCountAggregateOutputType = {
    surahId: number
    description: number
    updatedAt: number
    _all: number
  }


  export type SurahDescriptionAvgAggregateInputType = {
    surahId?: true
  }

  export type SurahDescriptionSumAggregateInputType = {
    surahId?: true
  }

  export type SurahDescriptionMinAggregateInputType = {
    surahId?: true
    description?: true
    updatedAt?: true
  }

  export type SurahDescriptionMaxAggregateInputType = {
    surahId?: true
    description?: true
    updatedAt?: true
  }

  export type SurahDescriptionCountAggregateInputType = {
    surahId?: true
    description?: true
    updatedAt?: true
    _all?: true
  }

  export type SurahDescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurahDescription to aggregate.
     */
    where?: SurahDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurahDescriptions to fetch.
     */
    orderBy?: SurahDescriptionOrderByWithRelationInput | SurahDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurahDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurahDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurahDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SurahDescriptions
    **/
    _count?: true | SurahDescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurahDescriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurahDescriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurahDescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurahDescriptionMaxAggregateInputType
  }

  export type GetSurahDescriptionAggregateType<T extends SurahDescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSurahDescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurahDescription[P]>
      : GetScalarType<T[P], AggregateSurahDescription[P]>
  }




  export type SurahDescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurahDescriptionWhereInput
    orderBy?: SurahDescriptionOrderByWithAggregationInput | SurahDescriptionOrderByWithAggregationInput[]
    by: SurahDescriptionScalarFieldEnum[] | SurahDescriptionScalarFieldEnum
    having?: SurahDescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurahDescriptionCountAggregateInputType | true
    _avg?: SurahDescriptionAvgAggregateInputType
    _sum?: SurahDescriptionSumAggregateInputType
    _min?: SurahDescriptionMinAggregateInputType
    _max?: SurahDescriptionMaxAggregateInputType
  }

  export type SurahDescriptionGroupByOutputType = {
    surahId: bigint
    description: string | null
    updatedAt: Date | null
    _count: SurahDescriptionCountAggregateOutputType | null
    _avg: SurahDescriptionAvgAggregateOutputType | null
    _sum: SurahDescriptionSumAggregateOutputType | null
    _min: SurahDescriptionMinAggregateOutputType | null
    _max: SurahDescriptionMaxAggregateOutputType | null
  }

  type GetSurahDescriptionGroupByPayload<T extends SurahDescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurahDescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurahDescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurahDescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SurahDescriptionGroupByOutputType[P]>
        }
      >
    >


  export type SurahDescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    surahId?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["surahDescription"]>

  export type SurahDescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    surahId?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["surahDescription"]>

  export type SurahDescriptionSelectScalar = {
    surahId?: boolean
    description?: boolean
    updatedAt?: boolean
  }


  export type $SurahDescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SurahDescription"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      surahId: bigint
      description: string | null
      updatedAt: Date | null
    }, ExtArgs["result"]["surahDescription"]>
    composites: {}
  }

  type SurahDescriptionGetPayload<S extends boolean | null | undefined | SurahDescriptionDefaultArgs> = $Result.GetResult<Prisma.$SurahDescriptionPayload, S>

  type SurahDescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SurahDescriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SurahDescriptionCountAggregateInputType | true
    }

  export interface SurahDescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SurahDescription'], meta: { name: 'SurahDescription' } }
    /**
     * Find zero or one SurahDescription that matches the filter.
     * @param {SurahDescriptionFindUniqueArgs} args - Arguments to find a SurahDescription
     * @example
     * // Get one SurahDescription
     * const surahDescription = await prisma.surahDescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurahDescriptionFindUniqueArgs>(args: SelectSubset<T, SurahDescriptionFindUniqueArgs<ExtArgs>>): Prisma__SurahDescriptionClient<$Result.GetResult<Prisma.$SurahDescriptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SurahDescription that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SurahDescriptionFindUniqueOrThrowArgs} args - Arguments to find a SurahDescription
     * @example
     * // Get one SurahDescription
     * const surahDescription = await prisma.surahDescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurahDescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SurahDescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurahDescriptionClient<$Result.GetResult<Prisma.$SurahDescriptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SurahDescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahDescriptionFindFirstArgs} args - Arguments to find a SurahDescription
     * @example
     * // Get one SurahDescription
     * const surahDescription = await prisma.surahDescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurahDescriptionFindFirstArgs>(args?: SelectSubset<T, SurahDescriptionFindFirstArgs<ExtArgs>>): Prisma__SurahDescriptionClient<$Result.GetResult<Prisma.$SurahDescriptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SurahDescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahDescriptionFindFirstOrThrowArgs} args - Arguments to find a SurahDescription
     * @example
     * // Get one SurahDescription
     * const surahDescription = await prisma.surahDescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurahDescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SurahDescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurahDescriptionClient<$Result.GetResult<Prisma.$SurahDescriptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SurahDescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahDescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SurahDescriptions
     * const surahDescriptions = await prisma.surahDescription.findMany()
     * 
     * // Get first 10 SurahDescriptions
     * const surahDescriptions = await prisma.surahDescription.findMany({ take: 10 })
     * 
     * // Only select the `surahId`
     * const surahDescriptionWithSurahIdOnly = await prisma.surahDescription.findMany({ select: { surahId: true } })
     * 
     */
    findMany<T extends SurahDescriptionFindManyArgs>(args?: SelectSubset<T, SurahDescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurahDescriptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SurahDescription.
     * @param {SurahDescriptionCreateArgs} args - Arguments to create a SurahDescription.
     * @example
     * // Create one SurahDescription
     * const SurahDescription = await prisma.surahDescription.create({
     *   data: {
     *     // ... data to create a SurahDescription
     *   }
     * })
     * 
     */
    create<T extends SurahDescriptionCreateArgs>(args: SelectSubset<T, SurahDescriptionCreateArgs<ExtArgs>>): Prisma__SurahDescriptionClient<$Result.GetResult<Prisma.$SurahDescriptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SurahDescriptions.
     * @param {SurahDescriptionCreateManyArgs} args - Arguments to create many SurahDescriptions.
     * @example
     * // Create many SurahDescriptions
     * const surahDescription = await prisma.surahDescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurahDescriptionCreateManyArgs>(args?: SelectSubset<T, SurahDescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SurahDescriptions and returns the data saved in the database.
     * @param {SurahDescriptionCreateManyAndReturnArgs} args - Arguments to create many SurahDescriptions.
     * @example
     * // Create many SurahDescriptions
     * const surahDescription = await prisma.surahDescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SurahDescriptions and only return the `surahId`
     * const surahDescriptionWithSurahIdOnly = await prisma.surahDescription.createManyAndReturn({ 
     *   select: { surahId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SurahDescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SurahDescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurahDescriptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SurahDescription.
     * @param {SurahDescriptionDeleteArgs} args - Arguments to delete one SurahDescription.
     * @example
     * // Delete one SurahDescription
     * const SurahDescription = await prisma.surahDescription.delete({
     *   where: {
     *     // ... filter to delete one SurahDescription
     *   }
     * })
     * 
     */
    delete<T extends SurahDescriptionDeleteArgs>(args: SelectSubset<T, SurahDescriptionDeleteArgs<ExtArgs>>): Prisma__SurahDescriptionClient<$Result.GetResult<Prisma.$SurahDescriptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SurahDescription.
     * @param {SurahDescriptionUpdateArgs} args - Arguments to update one SurahDescription.
     * @example
     * // Update one SurahDescription
     * const surahDescription = await prisma.surahDescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurahDescriptionUpdateArgs>(args: SelectSubset<T, SurahDescriptionUpdateArgs<ExtArgs>>): Prisma__SurahDescriptionClient<$Result.GetResult<Prisma.$SurahDescriptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SurahDescriptions.
     * @param {SurahDescriptionDeleteManyArgs} args - Arguments to filter SurahDescriptions to delete.
     * @example
     * // Delete a few SurahDescriptions
     * const { count } = await prisma.surahDescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurahDescriptionDeleteManyArgs>(args?: SelectSubset<T, SurahDescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurahDescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahDescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SurahDescriptions
     * const surahDescription = await prisma.surahDescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurahDescriptionUpdateManyArgs>(args: SelectSubset<T, SurahDescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SurahDescription.
     * @param {SurahDescriptionUpsertArgs} args - Arguments to update or create a SurahDescription.
     * @example
     * // Update or create a SurahDescription
     * const surahDescription = await prisma.surahDescription.upsert({
     *   create: {
     *     // ... data to create a SurahDescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SurahDescription we want to update
     *   }
     * })
     */
    upsert<T extends SurahDescriptionUpsertArgs>(args: SelectSubset<T, SurahDescriptionUpsertArgs<ExtArgs>>): Prisma__SurahDescriptionClient<$Result.GetResult<Prisma.$SurahDescriptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SurahDescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahDescriptionCountArgs} args - Arguments to filter SurahDescriptions to count.
     * @example
     * // Count the number of SurahDescriptions
     * const count = await prisma.surahDescription.count({
     *   where: {
     *     // ... the filter for the SurahDescriptions we want to count
     *   }
     * })
    **/
    count<T extends SurahDescriptionCountArgs>(
      args?: Subset<T, SurahDescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurahDescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SurahDescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahDescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SurahDescriptionAggregateArgs>(args: Subset<T, SurahDescriptionAggregateArgs>): Prisma.PrismaPromise<GetSurahDescriptionAggregateType<T>>

    /**
     * Group by SurahDescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahDescriptionGroupByArgs} args - Group by arguments.
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
      T extends SurahDescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurahDescriptionGroupByArgs['orderBy'] }
        : { orderBy?: SurahDescriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SurahDescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurahDescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SurahDescription model
   */
  readonly fields: SurahDescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SurahDescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurahDescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SurahDescription model
   */ 
  interface SurahDescriptionFieldRefs {
    readonly surahId: FieldRef<"SurahDescription", 'BigInt'>
    readonly description: FieldRef<"SurahDescription", 'String'>
    readonly updatedAt: FieldRef<"SurahDescription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SurahDescription findUnique
   */
  export type SurahDescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurahDescription
     */
    select?: SurahDescriptionSelect<ExtArgs> | null
    /**
     * Filter, which SurahDescription to fetch.
     */
    where: SurahDescriptionWhereUniqueInput
  }

  /**
   * SurahDescription findUniqueOrThrow
   */
  export type SurahDescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurahDescription
     */
    select?: SurahDescriptionSelect<ExtArgs> | null
    /**
     * Filter, which SurahDescription to fetch.
     */
    where: SurahDescriptionWhereUniqueInput
  }

  /**
   * SurahDescription findFirst
   */
  export type SurahDescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurahDescription
     */
    select?: SurahDescriptionSelect<ExtArgs> | null
    /**
     * Filter, which SurahDescription to fetch.
     */
    where?: SurahDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurahDescriptions to fetch.
     */
    orderBy?: SurahDescriptionOrderByWithRelationInput | SurahDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurahDescriptions.
     */
    cursor?: SurahDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurahDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurahDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurahDescriptions.
     */
    distinct?: SurahDescriptionScalarFieldEnum | SurahDescriptionScalarFieldEnum[]
  }

  /**
   * SurahDescription findFirstOrThrow
   */
  export type SurahDescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurahDescription
     */
    select?: SurahDescriptionSelect<ExtArgs> | null
    /**
     * Filter, which SurahDescription to fetch.
     */
    where?: SurahDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurahDescriptions to fetch.
     */
    orderBy?: SurahDescriptionOrderByWithRelationInput | SurahDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurahDescriptions.
     */
    cursor?: SurahDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurahDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurahDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurahDescriptions.
     */
    distinct?: SurahDescriptionScalarFieldEnum | SurahDescriptionScalarFieldEnum[]
  }

  /**
   * SurahDescription findMany
   */
  export type SurahDescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurahDescription
     */
    select?: SurahDescriptionSelect<ExtArgs> | null
    /**
     * Filter, which SurahDescriptions to fetch.
     */
    where?: SurahDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurahDescriptions to fetch.
     */
    orderBy?: SurahDescriptionOrderByWithRelationInput | SurahDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SurahDescriptions.
     */
    cursor?: SurahDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurahDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurahDescriptions.
     */
    skip?: number
    distinct?: SurahDescriptionScalarFieldEnum | SurahDescriptionScalarFieldEnum[]
  }

  /**
   * SurahDescription create
   */
  export type SurahDescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurahDescription
     */
    select?: SurahDescriptionSelect<ExtArgs> | null
    /**
     * The data needed to create a SurahDescription.
     */
    data: XOR<SurahDescriptionCreateInput, SurahDescriptionUncheckedCreateInput>
  }

  /**
   * SurahDescription createMany
   */
  export type SurahDescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SurahDescriptions.
     */
    data: SurahDescriptionCreateManyInput | SurahDescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SurahDescription createManyAndReturn
   */
  export type SurahDescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurahDescription
     */
    select?: SurahDescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SurahDescriptions.
     */
    data: SurahDescriptionCreateManyInput | SurahDescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SurahDescription update
   */
  export type SurahDescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurahDescription
     */
    select?: SurahDescriptionSelect<ExtArgs> | null
    /**
     * The data needed to update a SurahDescription.
     */
    data: XOR<SurahDescriptionUpdateInput, SurahDescriptionUncheckedUpdateInput>
    /**
     * Choose, which SurahDescription to update.
     */
    where: SurahDescriptionWhereUniqueInput
  }

  /**
   * SurahDescription updateMany
   */
  export type SurahDescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SurahDescriptions.
     */
    data: XOR<SurahDescriptionUpdateManyMutationInput, SurahDescriptionUncheckedUpdateManyInput>
    /**
     * Filter which SurahDescriptions to update
     */
    where?: SurahDescriptionWhereInput
  }

  /**
   * SurahDescription upsert
   */
  export type SurahDescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurahDescription
     */
    select?: SurahDescriptionSelect<ExtArgs> | null
    /**
     * The filter to search for the SurahDescription to update in case it exists.
     */
    where: SurahDescriptionWhereUniqueInput
    /**
     * In case the SurahDescription found by the `where` argument doesn't exist, create a new SurahDescription with this data.
     */
    create: XOR<SurahDescriptionCreateInput, SurahDescriptionUncheckedCreateInput>
    /**
     * In case the SurahDescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurahDescriptionUpdateInput, SurahDescriptionUncheckedUpdateInput>
  }

  /**
   * SurahDescription delete
   */
  export type SurahDescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurahDescription
     */
    select?: SurahDescriptionSelect<ExtArgs> | null
    /**
     * Filter which SurahDescription to delete.
     */
    where: SurahDescriptionWhereUniqueInput
  }

  /**
   * SurahDescription deleteMany
   */
  export type SurahDescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurahDescriptions to delete
     */
    where?: SurahDescriptionWhereInput
  }

  /**
   * SurahDescription without action
   */
  export type SurahDescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurahDescription
     */
    select?: SurahDescriptionSelect<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    userType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    userType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    userType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    userType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    userType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    userType?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    name: string | null
    userType: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    name?: boolean
    userType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    userType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    userType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookmarks: Prisma.$UserBookmarkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      name: string | null
      userType: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookmarks<T extends User$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, User$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly userType: FieldRef<"User", 'String'>
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
  }

  /**
   * User.bookmarks
   */
  export type User$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    where?: UserBookmarkWhereInput
    orderBy?: UserBookmarkOrderByWithRelationInput | UserBookmarkOrderByWithRelationInput[]
    cursor?: UserBookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBookmarkScalarFieldEnum | UserBookmarkScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserBookmark
   */

  export type AggregateUserBookmark = {
    _count: UserBookmarkCountAggregateOutputType | null
    _avg: UserBookmarkAvgAggregateOutputType | null
    _sum: UserBookmarkSumAggregateOutputType | null
    _min: UserBookmarkMinAggregateOutputType | null
    _max: UserBookmarkMaxAggregateOutputType | null
  }

  export type UserBookmarkAvgAggregateOutputType = {
    surahid: number | null
    versenumber: number | null
  }

  export type UserBookmarkSumAggregateOutputType = {
    surahid: number | null
    versenumber: number | null
  }

  export type UserBookmarkMinAggregateOutputType = {
    id: string | null
    userid: string | null
    surahid: number | null
    versenumber: number | null
    versetext: string | null
    surahname: string | null
    translation: string | null
    notes: string | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type UserBookmarkMaxAggregateOutputType = {
    id: string | null
    userid: string | null
    surahid: number | null
    versenumber: number | null
    versetext: string | null
    surahname: string | null
    translation: string | null
    notes: string | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type UserBookmarkCountAggregateOutputType = {
    id: number
    userid: number
    surahid: number
    versenumber: number
    versetext: number
    surahname: number
    translation: number
    notes: number
    createdat: number
    updatedat: number
    _all: number
  }


  export type UserBookmarkAvgAggregateInputType = {
    surahid?: true
    versenumber?: true
  }

  export type UserBookmarkSumAggregateInputType = {
    surahid?: true
    versenumber?: true
  }

  export type UserBookmarkMinAggregateInputType = {
    id?: true
    userid?: true
    surahid?: true
    versenumber?: true
    versetext?: true
    surahname?: true
    translation?: true
    notes?: true
    createdat?: true
    updatedat?: true
  }

  export type UserBookmarkMaxAggregateInputType = {
    id?: true
    userid?: true
    surahid?: true
    versenumber?: true
    versetext?: true
    surahname?: true
    translation?: true
    notes?: true
    createdat?: true
    updatedat?: true
  }

  export type UserBookmarkCountAggregateInputType = {
    id?: true
    userid?: true
    surahid?: true
    versenumber?: true
    versetext?: true
    surahname?: true
    translation?: true
    notes?: true
    createdat?: true
    updatedat?: true
    _all?: true
  }

  export type UserBookmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBookmark to aggregate.
     */
    where?: UserBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBookmarks to fetch.
     */
    orderBy?: UserBookmarkOrderByWithRelationInput | UserBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBookmarks
    **/
    _count?: true | UserBookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserBookmarkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserBookmarkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBookmarkMaxAggregateInputType
  }

  export type GetUserBookmarkAggregateType<T extends UserBookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBookmark[P]>
      : GetScalarType<T[P], AggregateUserBookmark[P]>
  }




  export type UserBookmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBookmarkWhereInput
    orderBy?: UserBookmarkOrderByWithAggregationInput | UserBookmarkOrderByWithAggregationInput[]
    by: UserBookmarkScalarFieldEnum[] | UserBookmarkScalarFieldEnum
    having?: UserBookmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBookmarkCountAggregateInputType | true
    _avg?: UserBookmarkAvgAggregateInputType
    _sum?: UserBookmarkSumAggregateInputType
    _min?: UserBookmarkMinAggregateInputType
    _max?: UserBookmarkMaxAggregateInputType
  }

  export type UserBookmarkGroupByOutputType = {
    id: string
    userid: string
    surahid: number
    versenumber: number
    versetext: string
    surahname: string
    translation: string
    notes: string | null
    createdat: Date
    updatedat: Date
    _count: UserBookmarkCountAggregateOutputType | null
    _avg: UserBookmarkAvgAggregateOutputType | null
    _sum: UserBookmarkSumAggregateOutputType | null
    _min: UserBookmarkMinAggregateOutputType | null
    _max: UserBookmarkMaxAggregateOutputType | null
  }

  type GetUserBookmarkGroupByPayload<T extends UserBookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], UserBookmarkGroupByOutputType[P]>
        }
      >
    >


  export type UserBookmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    surahid?: boolean
    versenumber?: boolean
    versetext?: boolean
    surahname?: boolean
    translation?: boolean
    notes?: boolean
    createdat?: boolean
    updatedat?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBookmark"]>

  export type UserBookmarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    surahid?: boolean
    versenumber?: boolean
    versetext?: boolean
    surahname?: boolean
    translation?: boolean
    notes?: boolean
    createdat?: boolean
    updatedat?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBookmark"]>

  export type UserBookmarkSelectScalar = {
    id?: boolean
    userid?: boolean
    surahid?: boolean
    versenumber?: boolean
    versetext?: boolean
    surahname?: boolean
    translation?: boolean
    notes?: boolean
    createdat?: boolean
    updatedat?: boolean
  }

  export type UserBookmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserBookmarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserBookmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBookmark"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userid: string
      surahid: number
      versenumber: number
      versetext: string
      surahname: string
      translation: string
      notes: string | null
      createdat: Date
      updatedat: Date
    }, ExtArgs["result"]["userBookmark"]>
    composites: {}
  }

  type UserBookmarkGetPayload<S extends boolean | null | undefined | UserBookmarkDefaultArgs> = $Result.GetResult<Prisma.$UserBookmarkPayload, S>

  type UserBookmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserBookmarkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserBookmarkCountAggregateInputType | true
    }

  export interface UserBookmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBookmark'], meta: { name: 'UserBookmark' } }
    /**
     * Find zero or one UserBookmark that matches the filter.
     * @param {UserBookmarkFindUniqueArgs} args - Arguments to find a UserBookmark
     * @example
     * // Get one UserBookmark
     * const userBookmark = await prisma.userBookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBookmarkFindUniqueArgs>(args: SelectSubset<T, UserBookmarkFindUniqueArgs<ExtArgs>>): Prisma__UserBookmarkClient<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserBookmark that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserBookmarkFindUniqueOrThrowArgs} args - Arguments to find a UserBookmark
     * @example
     * // Get one UserBookmark
     * const userBookmark = await prisma.userBookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBookmarkFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBookmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBookmarkClient<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserBookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookmarkFindFirstArgs} args - Arguments to find a UserBookmark
     * @example
     * // Get one UserBookmark
     * const userBookmark = await prisma.userBookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBookmarkFindFirstArgs>(args?: SelectSubset<T, UserBookmarkFindFirstArgs<ExtArgs>>): Prisma__UserBookmarkClient<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserBookmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookmarkFindFirstOrThrowArgs} args - Arguments to find a UserBookmark
     * @example
     * // Get one UserBookmark
     * const userBookmark = await prisma.userBookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBookmarkFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBookmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBookmarkClient<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserBookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookmarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBookmarks
     * const userBookmarks = await prisma.userBookmark.findMany()
     * 
     * // Get first 10 UserBookmarks
     * const userBookmarks = await prisma.userBookmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBookmarkWithIdOnly = await prisma.userBookmark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBookmarkFindManyArgs>(args?: SelectSubset<T, UserBookmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserBookmark.
     * @param {UserBookmarkCreateArgs} args - Arguments to create a UserBookmark.
     * @example
     * // Create one UserBookmark
     * const UserBookmark = await prisma.userBookmark.create({
     *   data: {
     *     // ... data to create a UserBookmark
     *   }
     * })
     * 
     */
    create<T extends UserBookmarkCreateArgs>(args: SelectSubset<T, UserBookmarkCreateArgs<ExtArgs>>): Prisma__UserBookmarkClient<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserBookmarks.
     * @param {UserBookmarkCreateManyArgs} args - Arguments to create many UserBookmarks.
     * @example
     * // Create many UserBookmarks
     * const userBookmark = await prisma.userBookmark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBookmarkCreateManyArgs>(args?: SelectSubset<T, UserBookmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBookmarks and returns the data saved in the database.
     * @param {UserBookmarkCreateManyAndReturnArgs} args - Arguments to create many UserBookmarks.
     * @example
     * // Create many UserBookmarks
     * const userBookmark = await prisma.userBookmark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBookmarks and only return the `id`
     * const userBookmarkWithIdOnly = await prisma.userBookmark.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBookmarkCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBookmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserBookmark.
     * @param {UserBookmarkDeleteArgs} args - Arguments to delete one UserBookmark.
     * @example
     * // Delete one UserBookmark
     * const UserBookmark = await prisma.userBookmark.delete({
     *   where: {
     *     // ... filter to delete one UserBookmark
     *   }
     * })
     * 
     */
    delete<T extends UserBookmarkDeleteArgs>(args: SelectSubset<T, UserBookmarkDeleteArgs<ExtArgs>>): Prisma__UserBookmarkClient<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserBookmark.
     * @param {UserBookmarkUpdateArgs} args - Arguments to update one UserBookmark.
     * @example
     * // Update one UserBookmark
     * const userBookmark = await prisma.userBookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBookmarkUpdateArgs>(args: SelectSubset<T, UserBookmarkUpdateArgs<ExtArgs>>): Prisma__UserBookmarkClient<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserBookmarks.
     * @param {UserBookmarkDeleteManyArgs} args - Arguments to filter UserBookmarks to delete.
     * @example
     * // Delete a few UserBookmarks
     * const { count } = await prisma.userBookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBookmarkDeleteManyArgs>(args?: SelectSubset<T, UserBookmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBookmarks
     * const userBookmark = await prisma.userBookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBookmarkUpdateManyArgs>(args: SelectSubset<T, UserBookmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserBookmark.
     * @param {UserBookmarkUpsertArgs} args - Arguments to update or create a UserBookmark.
     * @example
     * // Update or create a UserBookmark
     * const userBookmark = await prisma.userBookmark.upsert({
     *   create: {
     *     // ... data to create a UserBookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBookmark we want to update
     *   }
     * })
     */
    upsert<T extends UserBookmarkUpsertArgs>(args: SelectSubset<T, UserBookmarkUpsertArgs<ExtArgs>>): Prisma__UserBookmarkClient<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserBookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookmarkCountArgs} args - Arguments to filter UserBookmarks to count.
     * @example
     * // Count the number of UserBookmarks
     * const count = await prisma.userBookmark.count({
     *   where: {
     *     // ... the filter for the UserBookmarks we want to count
     *   }
     * })
    **/
    count<T extends UserBookmarkCountArgs>(
      args?: Subset<T, UserBookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserBookmarkAggregateArgs>(args: Subset<T, UserBookmarkAggregateArgs>): Prisma.PrismaPromise<GetUserBookmarkAggregateType<T>>

    /**
     * Group by UserBookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookmarkGroupByArgs} args - Group by arguments.
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
      T extends UserBookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBookmarkGroupByArgs['orderBy'] }
        : { orderBy?: UserBookmarkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserBookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBookmark model
   */
  readonly fields: UserBookmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBookmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserBookmark model
   */ 
  interface UserBookmarkFieldRefs {
    readonly id: FieldRef<"UserBookmark", 'String'>
    readonly userid: FieldRef<"UserBookmark", 'String'>
    readonly surahid: FieldRef<"UserBookmark", 'Int'>
    readonly versenumber: FieldRef<"UserBookmark", 'Int'>
    readonly versetext: FieldRef<"UserBookmark", 'String'>
    readonly surahname: FieldRef<"UserBookmark", 'String'>
    readonly translation: FieldRef<"UserBookmark", 'String'>
    readonly notes: FieldRef<"UserBookmark", 'String'>
    readonly createdat: FieldRef<"UserBookmark", 'DateTime'>
    readonly updatedat: FieldRef<"UserBookmark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserBookmark findUnique
   */
  export type UserBookmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which UserBookmark to fetch.
     */
    where: UserBookmarkWhereUniqueInput
  }

  /**
   * UserBookmark findUniqueOrThrow
   */
  export type UserBookmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which UserBookmark to fetch.
     */
    where: UserBookmarkWhereUniqueInput
  }

  /**
   * UserBookmark findFirst
   */
  export type UserBookmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which UserBookmark to fetch.
     */
    where?: UserBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBookmarks to fetch.
     */
    orderBy?: UserBookmarkOrderByWithRelationInput | UserBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBookmarks.
     */
    cursor?: UserBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBookmarks.
     */
    distinct?: UserBookmarkScalarFieldEnum | UserBookmarkScalarFieldEnum[]
  }

  /**
   * UserBookmark findFirstOrThrow
   */
  export type UserBookmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which UserBookmark to fetch.
     */
    where?: UserBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBookmarks to fetch.
     */
    orderBy?: UserBookmarkOrderByWithRelationInput | UserBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBookmarks.
     */
    cursor?: UserBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBookmarks.
     */
    distinct?: UserBookmarkScalarFieldEnum | UserBookmarkScalarFieldEnum[]
  }

  /**
   * UserBookmark findMany
   */
  export type UserBookmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which UserBookmarks to fetch.
     */
    where?: UserBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBookmarks to fetch.
     */
    orderBy?: UserBookmarkOrderByWithRelationInput | UserBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBookmarks.
     */
    cursor?: UserBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBookmarks.
     */
    skip?: number
    distinct?: UserBookmarkScalarFieldEnum | UserBookmarkScalarFieldEnum[]
  }

  /**
   * UserBookmark create
   */
  export type UserBookmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBookmark.
     */
    data: XOR<UserBookmarkCreateInput, UserBookmarkUncheckedCreateInput>
  }

  /**
   * UserBookmark createMany
   */
  export type UserBookmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBookmarks.
     */
    data: UserBookmarkCreateManyInput | UserBookmarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBookmark createManyAndReturn
   */
  export type UserBookmarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserBookmarks.
     */
    data: UserBookmarkCreateManyInput | UserBookmarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBookmark update
   */
  export type UserBookmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBookmark.
     */
    data: XOR<UserBookmarkUpdateInput, UserBookmarkUncheckedUpdateInput>
    /**
     * Choose, which UserBookmark to update.
     */
    where: UserBookmarkWhereUniqueInput
  }

  /**
   * UserBookmark updateMany
   */
  export type UserBookmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBookmarks.
     */
    data: XOR<UserBookmarkUpdateManyMutationInput, UserBookmarkUncheckedUpdateManyInput>
    /**
     * Filter which UserBookmarks to update
     */
    where?: UserBookmarkWhereInput
  }

  /**
   * UserBookmark upsert
   */
  export type UserBookmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBookmark to update in case it exists.
     */
    where: UserBookmarkWhereUniqueInput
    /**
     * In case the UserBookmark found by the `where` argument doesn't exist, create a new UserBookmark with this data.
     */
    create: XOR<UserBookmarkCreateInput, UserBookmarkUncheckedCreateInput>
    /**
     * In case the UserBookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBookmarkUpdateInput, UserBookmarkUncheckedUpdateInput>
  }

  /**
   * UserBookmark delete
   */
  export type UserBookmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * Filter which UserBookmark to delete.
     */
    where: UserBookmarkWhereUniqueInput
  }

  /**
   * UserBookmark deleteMany
   */
  export type UserBookmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBookmarks to delete
     */
    where?: UserBookmarkWhereInput
  }

  /**
   * UserBookmark without action
   */
  export type UserBookmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
  }


  /**
   * Model QuranTransliteration
   */

  export type AggregateQuranTransliteration = {
    _count: QuranTransliterationCountAggregateOutputType | null
    _avg: QuranTransliterationAvgAggregateOutputType | null
    _sum: QuranTransliterationSumAggregateOutputType | null
    _min: QuranTransliterationMinAggregateOutputType | null
    _max: QuranTransliterationMaxAggregateOutputType | null
  }

  export type QuranTransliterationAvgAggregateOutputType = {
    id: number | null
    sura: number | null
    aya: number | null
  }

  export type QuranTransliterationSumAggregateOutputType = {
    id: bigint | null
    sura: bigint | null
    aya: bigint | null
  }

  export type QuranTransliterationMinAggregateOutputType = {
    id: bigint | null
    sura: bigint | null
    aya: bigint | null
    rawText: string | null
    cleanText: string | null
    formattedText: string | null
    source: string | null
    createdAt: Date | null
  }

  export type QuranTransliterationMaxAggregateOutputType = {
    id: bigint | null
    sura: bigint | null
    aya: bigint | null
    rawText: string | null
    cleanText: string | null
    formattedText: string | null
    source: string | null
    createdAt: Date | null
  }

  export type QuranTransliterationCountAggregateOutputType = {
    id: number
    sura: number
    aya: number
    rawText: number
    cleanText: number
    formattedText: number
    source: number
    createdAt: number
    _all: number
  }


  export type QuranTransliterationAvgAggregateInputType = {
    id?: true
    sura?: true
    aya?: true
  }

  export type QuranTransliterationSumAggregateInputType = {
    id?: true
    sura?: true
    aya?: true
  }

  export type QuranTransliterationMinAggregateInputType = {
    id?: true
    sura?: true
    aya?: true
    rawText?: true
    cleanText?: true
    formattedText?: true
    source?: true
    createdAt?: true
  }

  export type QuranTransliterationMaxAggregateInputType = {
    id?: true
    sura?: true
    aya?: true
    rawText?: true
    cleanText?: true
    formattedText?: true
    source?: true
    createdAt?: true
  }

  export type QuranTransliterationCountAggregateInputType = {
    id?: true
    sura?: true
    aya?: true
    rawText?: true
    cleanText?: true
    formattedText?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type QuranTransliterationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuranTransliteration to aggregate.
     */
    where?: QuranTransliterationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuranTransliterations to fetch.
     */
    orderBy?: QuranTransliterationOrderByWithRelationInput | QuranTransliterationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuranTransliterationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuranTransliterations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuranTransliterations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuranTransliterations
    **/
    _count?: true | QuranTransliterationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuranTransliterationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuranTransliterationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuranTransliterationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuranTransliterationMaxAggregateInputType
  }

  export type GetQuranTransliterationAggregateType<T extends QuranTransliterationAggregateArgs> = {
        [P in keyof T & keyof AggregateQuranTransliteration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuranTransliteration[P]>
      : GetScalarType<T[P], AggregateQuranTransliteration[P]>
  }




  export type QuranTransliterationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuranTransliterationWhereInput
    orderBy?: QuranTransliterationOrderByWithAggregationInput | QuranTransliterationOrderByWithAggregationInput[]
    by: QuranTransliterationScalarFieldEnum[] | QuranTransliterationScalarFieldEnum
    having?: QuranTransliterationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuranTransliterationCountAggregateInputType | true
    _avg?: QuranTransliterationAvgAggregateInputType
    _sum?: QuranTransliterationSumAggregateInputType
    _min?: QuranTransliterationMinAggregateInputType
    _max?: QuranTransliterationMaxAggregateInputType
  }

  export type QuranTransliterationGroupByOutputType = {
    id: bigint
    sura: bigint
    aya: bigint
    rawText: string | null
    cleanText: string | null
    formattedText: string | null
    source: string | null
    createdAt: Date
    _count: QuranTransliterationCountAggregateOutputType | null
    _avg: QuranTransliterationAvgAggregateOutputType | null
    _sum: QuranTransliterationSumAggregateOutputType | null
    _min: QuranTransliterationMinAggregateOutputType | null
    _max: QuranTransliterationMaxAggregateOutputType | null
  }

  type GetQuranTransliterationGroupByPayload<T extends QuranTransliterationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuranTransliterationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuranTransliterationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuranTransliterationGroupByOutputType[P]>
            : GetScalarType<T[P], QuranTransliterationGroupByOutputType[P]>
        }
      >
    >


  export type QuranTransliterationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sura?: boolean
    aya?: boolean
    rawText?: boolean
    cleanText?: boolean
    formattedText?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["quranTransliteration"]>

  export type QuranTransliterationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sura?: boolean
    aya?: boolean
    rawText?: boolean
    cleanText?: boolean
    formattedText?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["quranTransliteration"]>

  export type QuranTransliterationSelectScalar = {
    id?: boolean
    sura?: boolean
    aya?: boolean
    rawText?: boolean
    cleanText?: boolean
    formattedText?: boolean
    source?: boolean
    createdAt?: boolean
  }


  export type $QuranTransliterationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuranTransliteration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      sura: bigint
      aya: bigint
      rawText: string | null
      cleanText: string | null
      formattedText: string | null
      source: string | null
      createdAt: Date
    }, ExtArgs["result"]["quranTransliteration"]>
    composites: {}
  }

  type QuranTransliterationGetPayload<S extends boolean | null | undefined | QuranTransliterationDefaultArgs> = $Result.GetResult<Prisma.$QuranTransliterationPayload, S>

  type QuranTransliterationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuranTransliterationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuranTransliterationCountAggregateInputType | true
    }

  export interface QuranTransliterationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuranTransliteration'], meta: { name: 'QuranTransliteration' } }
    /**
     * Find zero or one QuranTransliteration that matches the filter.
     * @param {QuranTransliterationFindUniqueArgs} args - Arguments to find a QuranTransliteration
     * @example
     * // Get one QuranTransliteration
     * const quranTransliteration = await prisma.quranTransliteration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuranTransliterationFindUniqueArgs>(args: SelectSubset<T, QuranTransliterationFindUniqueArgs<ExtArgs>>): Prisma__QuranTransliterationClient<$Result.GetResult<Prisma.$QuranTransliterationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QuranTransliteration that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuranTransliterationFindUniqueOrThrowArgs} args - Arguments to find a QuranTransliteration
     * @example
     * // Get one QuranTransliteration
     * const quranTransliteration = await prisma.quranTransliteration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuranTransliterationFindUniqueOrThrowArgs>(args: SelectSubset<T, QuranTransliterationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuranTransliterationClient<$Result.GetResult<Prisma.$QuranTransliterationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QuranTransliteration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranTransliterationFindFirstArgs} args - Arguments to find a QuranTransliteration
     * @example
     * // Get one QuranTransliteration
     * const quranTransliteration = await prisma.quranTransliteration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuranTransliterationFindFirstArgs>(args?: SelectSubset<T, QuranTransliterationFindFirstArgs<ExtArgs>>): Prisma__QuranTransliterationClient<$Result.GetResult<Prisma.$QuranTransliterationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QuranTransliteration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranTransliterationFindFirstOrThrowArgs} args - Arguments to find a QuranTransliteration
     * @example
     * // Get one QuranTransliteration
     * const quranTransliteration = await prisma.quranTransliteration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuranTransliterationFindFirstOrThrowArgs>(args?: SelectSubset<T, QuranTransliterationFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuranTransliterationClient<$Result.GetResult<Prisma.$QuranTransliterationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QuranTransliterations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranTransliterationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuranTransliterations
     * const quranTransliterations = await prisma.quranTransliteration.findMany()
     * 
     * // Get first 10 QuranTransliterations
     * const quranTransliterations = await prisma.quranTransliteration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quranTransliterationWithIdOnly = await prisma.quranTransliteration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuranTransliterationFindManyArgs>(args?: SelectSubset<T, QuranTransliterationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuranTransliterationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QuranTransliteration.
     * @param {QuranTransliterationCreateArgs} args - Arguments to create a QuranTransliteration.
     * @example
     * // Create one QuranTransliteration
     * const QuranTransliteration = await prisma.quranTransliteration.create({
     *   data: {
     *     // ... data to create a QuranTransliteration
     *   }
     * })
     * 
     */
    create<T extends QuranTransliterationCreateArgs>(args: SelectSubset<T, QuranTransliterationCreateArgs<ExtArgs>>): Prisma__QuranTransliterationClient<$Result.GetResult<Prisma.$QuranTransliterationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QuranTransliterations.
     * @param {QuranTransliterationCreateManyArgs} args - Arguments to create many QuranTransliterations.
     * @example
     * // Create many QuranTransliterations
     * const quranTransliteration = await prisma.quranTransliteration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuranTransliterationCreateManyArgs>(args?: SelectSubset<T, QuranTransliterationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuranTransliterations and returns the data saved in the database.
     * @param {QuranTransliterationCreateManyAndReturnArgs} args - Arguments to create many QuranTransliterations.
     * @example
     * // Create many QuranTransliterations
     * const quranTransliteration = await prisma.quranTransliteration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuranTransliterations and only return the `id`
     * const quranTransliterationWithIdOnly = await prisma.quranTransliteration.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuranTransliterationCreateManyAndReturnArgs>(args?: SelectSubset<T, QuranTransliterationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuranTransliterationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a QuranTransliteration.
     * @param {QuranTransliterationDeleteArgs} args - Arguments to delete one QuranTransliteration.
     * @example
     * // Delete one QuranTransliteration
     * const QuranTransliteration = await prisma.quranTransliteration.delete({
     *   where: {
     *     // ... filter to delete one QuranTransliteration
     *   }
     * })
     * 
     */
    delete<T extends QuranTransliterationDeleteArgs>(args: SelectSubset<T, QuranTransliterationDeleteArgs<ExtArgs>>): Prisma__QuranTransliterationClient<$Result.GetResult<Prisma.$QuranTransliterationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QuranTransliteration.
     * @param {QuranTransliterationUpdateArgs} args - Arguments to update one QuranTransliteration.
     * @example
     * // Update one QuranTransliteration
     * const quranTransliteration = await prisma.quranTransliteration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuranTransliterationUpdateArgs>(args: SelectSubset<T, QuranTransliterationUpdateArgs<ExtArgs>>): Prisma__QuranTransliterationClient<$Result.GetResult<Prisma.$QuranTransliterationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QuranTransliterations.
     * @param {QuranTransliterationDeleteManyArgs} args - Arguments to filter QuranTransliterations to delete.
     * @example
     * // Delete a few QuranTransliterations
     * const { count } = await prisma.quranTransliteration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuranTransliterationDeleteManyArgs>(args?: SelectSubset<T, QuranTransliterationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuranTransliterations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranTransliterationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuranTransliterations
     * const quranTransliteration = await prisma.quranTransliteration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuranTransliterationUpdateManyArgs>(args: SelectSubset<T, QuranTransliterationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuranTransliteration.
     * @param {QuranTransliterationUpsertArgs} args - Arguments to update or create a QuranTransliteration.
     * @example
     * // Update or create a QuranTransliteration
     * const quranTransliteration = await prisma.quranTransliteration.upsert({
     *   create: {
     *     // ... data to create a QuranTransliteration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuranTransliteration we want to update
     *   }
     * })
     */
    upsert<T extends QuranTransliterationUpsertArgs>(args: SelectSubset<T, QuranTransliterationUpsertArgs<ExtArgs>>): Prisma__QuranTransliterationClient<$Result.GetResult<Prisma.$QuranTransliterationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of QuranTransliterations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranTransliterationCountArgs} args - Arguments to filter QuranTransliterations to count.
     * @example
     * // Count the number of QuranTransliterations
     * const count = await prisma.quranTransliteration.count({
     *   where: {
     *     // ... the filter for the QuranTransliterations we want to count
     *   }
     * })
    **/
    count<T extends QuranTransliterationCountArgs>(
      args?: Subset<T, QuranTransliterationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuranTransliterationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuranTransliteration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranTransliterationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuranTransliterationAggregateArgs>(args: Subset<T, QuranTransliterationAggregateArgs>): Prisma.PrismaPromise<GetQuranTransliterationAggregateType<T>>

    /**
     * Group by QuranTransliteration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuranTransliterationGroupByArgs} args - Group by arguments.
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
      T extends QuranTransliterationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuranTransliterationGroupByArgs['orderBy'] }
        : { orderBy?: QuranTransliterationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuranTransliterationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuranTransliterationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuranTransliteration model
   */
  readonly fields: QuranTransliterationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuranTransliteration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuranTransliterationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the QuranTransliteration model
   */ 
  interface QuranTransliterationFieldRefs {
    readonly id: FieldRef<"QuranTransliteration", 'BigInt'>
    readonly sura: FieldRef<"QuranTransliteration", 'BigInt'>
    readonly aya: FieldRef<"QuranTransliteration", 'BigInt'>
    readonly rawText: FieldRef<"QuranTransliteration", 'String'>
    readonly cleanText: FieldRef<"QuranTransliteration", 'String'>
    readonly formattedText: FieldRef<"QuranTransliteration", 'String'>
    readonly source: FieldRef<"QuranTransliteration", 'String'>
    readonly createdAt: FieldRef<"QuranTransliteration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuranTransliteration findUnique
   */
  export type QuranTransliterationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranTransliteration
     */
    select?: QuranTransliterationSelect<ExtArgs> | null
    /**
     * Filter, which QuranTransliteration to fetch.
     */
    where: QuranTransliterationWhereUniqueInput
  }

  /**
   * QuranTransliteration findUniqueOrThrow
   */
  export type QuranTransliterationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranTransliteration
     */
    select?: QuranTransliterationSelect<ExtArgs> | null
    /**
     * Filter, which QuranTransliteration to fetch.
     */
    where: QuranTransliterationWhereUniqueInput
  }

  /**
   * QuranTransliteration findFirst
   */
  export type QuranTransliterationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranTransliteration
     */
    select?: QuranTransliterationSelect<ExtArgs> | null
    /**
     * Filter, which QuranTransliteration to fetch.
     */
    where?: QuranTransliterationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuranTransliterations to fetch.
     */
    orderBy?: QuranTransliterationOrderByWithRelationInput | QuranTransliterationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuranTransliterations.
     */
    cursor?: QuranTransliterationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuranTransliterations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuranTransliterations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuranTransliterations.
     */
    distinct?: QuranTransliterationScalarFieldEnum | QuranTransliterationScalarFieldEnum[]
  }

  /**
   * QuranTransliteration findFirstOrThrow
   */
  export type QuranTransliterationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranTransliteration
     */
    select?: QuranTransliterationSelect<ExtArgs> | null
    /**
     * Filter, which QuranTransliteration to fetch.
     */
    where?: QuranTransliterationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuranTransliterations to fetch.
     */
    orderBy?: QuranTransliterationOrderByWithRelationInput | QuranTransliterationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuranTransliterations.
     */
    cursor?: QuranTransliterationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuranTransliterations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuranTransliterations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuranTransliterations.
     */
    distinct?: QuranTransliterationScalarFieldEnum | QuranTransliterationScalarFieldEnum[]
  }

  /**
   * QuranTransliteration findMany
   */
  export type QuranTransliterationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranTransliteration
     */
    select?: QuranTransliterationSelect<ExtArgs> | null
    /**
     * Filter, which QuranTransliterations to fetch.
     */
    where?: QuranTransliterationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuranTransliterations to fetch.
     */
    orderBy?: QuranTransliterationOrderByWithRelationInput | QuranTransliterationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuranTransliterations.
     */
    cursor?: QuranTransliterationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuranTransliterations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuranTransliterations.
     */
    skip?: number
    distinct?: QuranTransliterationScalarFieldEnum | QuranTransliterationScalarFieldEnum[]
  }

  /**
   * QuranTransliteration create
   */
  export type QuranTransliterationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranTransliteration
     */
    select?: QuranTransliterationSelect<ExtArgs> | null
    /**
     * The data needed to create a QuranTransliteration.
     */
    data: XOR<QuranTransliterationCreateInput, QuranTransliterationUncheckedCreateInput>
  }

  /**
   * QuranTransliteration createMany
   */
  export type QuranTransliterationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuranTransliterations.
     */
    data: QuranTransliterationCreateManyInput | QuranTransliterationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuranTransliteration createManyAndReturn
   */
  export type QuranTransliterationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranTransliteration
     */
    select?: QuranTransliterationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many QuranTransliterations.
     */
    data: QuranTransliterationCreateManyInput | QuranTransliterationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuranTransliteration update
   */
  export type QuranTransliterationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranTransliteration
     */
    select?: QuranTransliterationSelect<ExtArgs> | null
    /**
     * The data needed to update a QuranTransliteration.
     */
    data: XOR<QuranTransliterationUpdateInput, QuranTransliterationUncheckedUpdateInput>
    /**
     * Choose, which QuranTransliteration to update.
     */
    where: QuranTransliterationWhereUniqueInput
  }

  /**
   * QuranTransliteration updateMany
   */
  export type QuranTransliterationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuranTransliterations.
     */
    data: XOR<QuranTransliterationUpdateManyMutationInput, QuranTransliterationUncheckedUpdateManyInput>
    /**
     * Filter which QuranTransliterations to update
     */
    where?: QuranTransliterationWhereInput
  }

  /**
   * QuranTransliteration upsert
   */
  export type QuranTransliterationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranTransliteration
     */
    select?: QuranTransliterationSelect<ExtArgs> | null
    /**
     * The filter to search for the QuranTransliteration to update in case it exists.
     */
    where: QuranTransliterationWhereUniqueInput
    /**
     * In case the QuranTransliteration found by the `where` argument doesn't exist, create a new QuranTransliteration with this data.
     */
    create: XOR<QuranTransliterationCreateInput, QuranTransliterationUncheckedCreateInput>
    /**
     * In case the QuranTransliteration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuranTransliterationUpdateInput, QuranTransliterationUncheckedUpdateInput>
  }

  /**
   * QuranTransliteration delete
   */
  export type QuranTransliterationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranTransliteration
     */
    select?: QuranTransliterationSelect<ExtArgs> | null
    /**
     * Filter which QuranTransliteration to delete.
     */
    where: QuranTransliterationWhereUniqueInput
  }

  /**
   * QuranTransliteration deleteMany
   */
  export type QuranTransliterationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuranTransliterations to delete
     */
    where?: QuranTransliterationWhereInput
  }

  /**
   * QuranTransliteration without action
   */
  export type QuranTransliterationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuranTransliteration
     */
    select?: QuranTransliterationSelect<ExtArgs> | null
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


  export const EnYusufaliScalarFieldEnum: {
    index: 'index',
    sura: 'sura',
    aya: 'aya',
    text: 'text'
  };

  export type EnYusufaliScalarFieldEnum = (typeof EnYusufaliScalarFieldEnum)[keyof typeof EnYusufaliScalarFieldEnum]


  export const QuranSajdaScalarFieldEnum: {
    sajdaId: 'sajdaId',
    surahNumber: 'surahNumber',
    ayahNumber: 'ayahNumber',
    type: 'type'
  };

  export type QuranSajdaScalarFieldEnum = (typeof QuranSajdaScalarFieldEnum)[keyof typeof QuranSajdaScalarFieldEnum]


  export const QuranSurahScalarFieldEnum: {
    number: 'number',
    arabicName: 'arabicName',
    transliteration: 'transliteration',
    englishName: 'englishName',
    ayas: 'ayas',
    revelationType: 'revelationType',
    chronologicalOrder: 'chronologicalOrder',
    rukus: 'rukus',
    startIndex: 'startIndex'
  };

  export type QuranSurahScalarFieldEnum = (typeof QuranSurahScalarFieldEnum)[keyof typeof QuranSurahScalarFieldEnum]


  export const QuranTextScalarFieldEnum: {
    id: 'id',
    sura: 'sura',
    aya: 'aya',
    text: 'text'
  };

  export type QuranTextScalarFieldEnum = (typeof QuranTextScalarFieldEnum)[keyof typeof QuranTextScalarFieldEnum]


  export const SurahDescriptionScalarFieldEnum: {
    surahId: 'surahId',
    description: 'description',
    updatedAt: 'updatedAt'
  };

  export type SurahDescriptionScalarFieldEnum = (typeof SurahDescriptionScalarFieldEnum)[keyof typeof SurahDescriptionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    userType: 'userType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserBookmarkScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    surahid: 'surahid',
    versenumber: 'versenumber',
    versetext: 'versetext',
    surahname: 'surahname',
    translation: 'translation',
    notes: 'notes',
    createdat: 'createdat',
    updatedat: 'updatedat'
  };

  export type UserBookmarkScalarFieldEnum = (typeof UserBookmarkScalarFieldEnum)[keyof typeof UserBookmarkScalarFieldEnum]


  export const QuranTransliterationScalarFieldEnum: {
    id: 'id',
    sura: 'sura',
    aya: 'aya',
    rawText: 'rawText',
    cleanText: 'cleanText',
    formattedText: 'formattedText',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type QuranTransliterationScalarFieldEnum = (typeof QuranTransliterationScalarFieldEnum)[keyof typeof QuranTransliterationScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type EnYusufaliWhereInput = {
    AND?: EnYusufaliWhereInput | EnYusufaliWhereInput[]
    OR?: EnYusufaliWhereInput[]
    NOT?: EnYusufaliWhereInput | EnYusufaliWhereInput[]
    index?: BigIntFilter<"EnYusufali"> | bigint | number
    sura?: BigIntNullableFilter<"EnYusufali"> | bigint | number | null
    aya?: BigIntNullableFilter<"EnYusufali"> | bigint | number | null
    text?: StringNullableFilter<"EnYusufali"> | string | null
  }

  export type EnYusufaliOrderByWithRelationInput = {
    index?: SortOrder
    sura?: SortOrderInput | SortOrder
    aya?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
  }

  export type EnYusufaliWhereUniqueInput = Prisma.AtLeast<{
    index?: bigint | number
    AND?: EnYusufaliWhereInput | EnYusufaliWhereInput[]
    OR?: EnYusufaliWhereInput[]
    NOT?: EnYusufaliWhereInput | EnYusufaliWhereInput[]
    sura?: BigIntNullableFilter<"EnYusufali"> | bigint | number | null
    aya?: BigIntNullableFilter<"EnYusufali"> | bigint | number | null
    text?: StringNullableFilter<"EnYusufali"> | string | null
  }, "index">

  export type EnYusufaliOrderByWithAggregationInput = {
    index?: SortOrder
    sura?: SortOrderInput | SortOrder
    aya?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    _count?: EnYusufaliCountOrderByAggregateInput
    _avg?: EnYusufaliAvgOrderByAggregateInput
    _max?: EnYusufaliMaxOrderByAggregateInput
    _min?: EnYusufaliMinOrderByAggregateInput
    _sum?: EnYusufaliSumOrderByAggregateInput
  }

  export type EnYusufaliScalarWhereWithAggregatesInput = {
    AND?: EnYusufaliScalarWhereWithAggregatesInput | EnYusufaliScalarWhereWithAggregatesInput[]
    OR?: EnYusufaliScalarWhereWithAggregatesInput[]
    NOT?: EnYusufaliScalarWhereWithAggregatesInput | EnYusufaliScalarWhereWithAggregatesInput[]
    index?: BigIntWithAggregatesFilter<"EnYusufali"> | bigint | number
    sura?: BigIntNullableWithAggregatesFilter<"EnYusufali"> | bigint | number | null
    aya?: BigIntNullableWithAggregatesFilter<"EnYusufali"> | bigint | number | null
    text?: StringNullableWithAggregatesFilter<"EnYusufali"> | string | null
  }

  export type QuranSajdaWhereInput = {
    AND?: QuranSajdaWhereInput | QuranSajdaWhereInput[]
    OR?: QuranSajdaWhereInput[]
    NOT?: QuranSajdaWhereInput | QuranSajdaWhereInput[]
    sajdaId?: BigIntFilter<"QuranSajda"> | bigint | number
    surahNumber?: BigIntNullableFilter<"QuranSajda"> | bigint | number | null
    ayahNumber?: BigIntNullableFilter<"QuranSajda"> | bigint | number | null
    type?: StringNullableFilter<"QuranSajda"> | string | null
  }

  export type QuranSajdaOrderByWithRelationInput = {
    sajdaId?: SortOrder
    surahNumber?: SortOrderInput | SortOrder
    ayahNumber?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
  }

  export type QuranSajdaWhereUniqueInput = Prisma.AtLeast<{
    sajdaId?: bigint | number
    AND?: QuranSajdaWhereInput | QuranSajdaWhereInput[]
    OR?: QuranSajdaWhereInput[]
    NOT?: QuranSajdaWhereInput | QuranSajdaWhereInput[]
    surahNumber?: BigIntNullableFilter<"QuranSajda"> | bigint | number | null
    ayahNumber?: BigIntNullableFilter<"QuranSajda"> | bigint | number | null
    type?: StringNullableFilter<"QuranSajda"> | string | null
  }, "sajdaId">

  export type QuranSajdaOrderByWithAggregationInput = {
    sajdaId?: SortOrder
    surahNumber?: SortOrderInput | SortOrder
    ayahNumber?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    _count?: QuranSajdaCountOrderByAggregateInput
    _avg?: QuranSajdaAvgOrderByAggregateInput
    _max?: QuranSajdaMaxOrderByAggregateInput
    _min?: QuranSajdaMinOrderByAggregateInput
    _sum?: QuranSajdaSumOrderByAggregateInput
  }

  export type QuranSajdaScalarWhereWithAggregatesInput = {
    AND?: QuranSajdaScalarWhereWithAggregatesInput | QuranSajdaScalarWhereWithAggregatesInput[]
    OR?: QuranSajdaScalarWhereWithAggregatesInput[]
    NOT?: QuranSajdaScalarWhereWithAggregatesInput | QuranSajdaScalarWhereWithAggregatesInput[]
    sajdaId?: BigIntWithAggregatesFilter<"QuranSajda"> | bigint | number
    surahNumber?: BigIntNullableWithAggregatesFilter<"QuranSajda"> | bigint | number | null
    ayahNumber?: BigIntNullableWithAggregatesFilter<"QuranSajda"> | bigint | number | null
    type?: StringNullableWithAggregatesFilter<"QuranSajda"> | string | null
  }

  export type QuranSurahWhereInput = {
    AND?: QuranSurahWhereInput | QuranSurahWhereInput[]
    OR?: QuranSurahWhereInput[]
    NOT?: QuranSurahWhereInput | QuranSurahWhereInput[]
    number?: BigIntFilter<"QuranSurah"> | bigint | number
    arabicName?: StringNullableFilter<"QuranSurah"> | string | null
    transliteration?: StringNullableFilter<"QuranSurah"> | string | null
    englishName?: StringNullableFilter<"QuranSurah"> | string | null
    ayas?: BigIntNullableFilter<"QuranSurah"> | bigint | number | null
    revelationType?: StringNullableFilter<"QuranSurah"> | string | null
    chronologicalOrder?: BigIntNullableFilter<"QuranSurah"> | bigint | number | null
    rukus?: BigIntNullableFilter<"QuranSurah"> | bigint | number | null
    startIndex?: BigIntNullableFilter<"QuranSurah"> | bigint | number | null
  }

  export type QuranSurahOrderByWithRelationInput = {
    number?: SortOrder
    arabicName?: SortOrderInput | SortOrder
    transliteration?: SortOrderInput | SortOrder
    englishName?: SortOrderInput | SortOrder
    ayas?: SortOrderInput | SortOrder
    revelationType?: SortOrderInput | SortOrder
    chronologicalOrder?: SortOrderInput | SortOrder
    rukus?: SortOrderInput | SortOrder
    startIndex?: SortOrderInput | SortOrder
  }

  export type QuranSurahWhereUniqueInput = Prisma.AtLeast<{
    number?: bigint | number
    AND?: QuranSurahWhereInput | QuranSurahWhereInput[]
    OR?: QuranSurahWhereInput[]
    NOT?: QuranSurahWhereInput | QuranSurahWhereInput[]
    arabicName?: StringNullableFilter<"QuranSurah"> | string | null
    transliteration?: StringNullableFilter<"QuranSurah"> | string | null
    englishName?: StringNullableFilter<"QuranSurah"> | string | null
    ayas?: BigIntNullableFilter<"QuranSurah"> | bigint | number | null
    revelationType?: StringNullableFilter<"QuranSurah"> | string | null
    chronologicalOrder?: BigIntNullableFilter<"QuranSurah"> | bigint | number | null
    rukus?: BigIntNullableFilter<"QuranSurah"> | bigint | number | null
    startIndex?: BigIntNullableFilter<"QuranSurah"> | bigint | number | null
  }, "number">

  export type QuranSurahOrderByWithAggregationInput = {
    number?: SortOrder
    arabicName?: SortOrderInput | SortOrder
    transliteration?: SortOrderInput | SortOrder
    englishName?: SortOrderInput | SortOrder
    ayas?: SortOrderInput | SortOrder
    revelationType?: SortOrderInput | SortOrder
    chronologicalOrder?: SortOrderInput | SortOrder
    rukus?: SortOrderInput | SortOrder
    startIndex?: SortOrderInput | SortOrder
    _count?: QuranSurahCountOrderByAggregateInput
    _avg?: QuranSurahAvgOrderByAggregateInput
    _max?: QuranSurahMaxOrderByAggregateInput
    _min?: QuranSurahMinOrderByAggregateInput
    _sum?: QuranSurahSumOrderByAggregateInput
  }

  export type QuranSurahScalarWhereWithAggregatesInput = {
    AND?: QuranSurahScalarWhereWithAggregatesInput | QuranSurahScalarWhereWithAggregatesInput[]
    OR?: QuranSurahScalarWhereWithAggregatesInput[]
    NOT?: QuranSurahScalarWhereWithAggregatesInput | QuranSurahScalarWhereWithAggregatesInput[]
    number?: BigIntWithAggregatesFilter<"QuranSurah"> | bigint | number
    arabicName?: StringNullableWithAggregatesFilter<"QuranSurah"> | string | null
    transliteration?: StringNullableWithAggregatesFilter<"QuranSurah"> | string | null
    englishName?: StringNullableWithAggregatesFilter<"QuranSurah"> | string | null
    ayas?: BigIntNullableWithAggregatesFilter<"QuranSurah"> | bigint | number | null
    revelationType?: StringNullableWithAggregatesFilter<"QuranSurah"> | string | null
    chronologicalOrder?: BigIntNullableWithAggregatesFilter<"QuranSurah"> | bigint | number | null
    rukus?: BigIntNullableWithAggregatesFilter<"QuranSurah"> | bigint | number | null
    startIndex?: BigIntNullableWithAggregatesFilter<"QuranSurah"> | bigint | number | null
  }

  export type QuranTextWhereInput = {
    AND?: QuranTextWhereInput | QuranTextWhereInput[]
    OR?: QuranTextWhereInput[]
    NOT?: QuranTextWhereInput | QuranTextWhereInput[]
    id?: BigIntFilter<"QuranText"> | bigint | number
    sura?: BigIntNullableFilter<"QuranText"> | bigint | number | null
    aya?: BigIntNullableFilter<"QuranText"> | bigint | number | null
    text?: StringNullableFilter<"QuranText"> | string | null
  }

  export type QuranTextOrderByWithRelationInput = {
    id?: SortOrder
    sura?: SortOrderInput | SortOrder
    aya?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
  }

  export type QuranTextWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: QuranTextWhereInput | QuranTextWhereInput[]
    OR?: QuranTextWhereInput[]
    NOT?: QuranTextWhereInput | QuranTextWhereInput[]
    sura?: BigIntNullableFilter<"QuranText"> | bigint | number | null
    aya?: BigIntNullableFilter<"QuranText"> | bigint | number | null
    text?: StringNullableFilter<"QuranText"> | string | null
  }, "id">

  export type QuranTextOrderByWithAggregationInput = {
    id?: SortOrder
    sura?: SortOrderInput | SortOrder
    aya?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    _count?: QuranTextCountOrderByAggregateInput
    _avg?: QuranTextAvgOrderByAggregateInput
    _max?: QuranTextMaxOrderByAggregateInput
    _min?: QuranTextMinOrderByAggregateInput
    _sum?: QuranTextSumOrderByAggregateInput
  }

  export type QuranTextScalarWhereWithAggregatesInput = {
    AND?: QuranTextScalarWhereWithAggregatesInput | QuranTextScalarWhereWithAggregatesInput[]
    OR?: QuranTextScalarWhereWithAggregatesInput[]
    NOT?: QuranTextScalarWhereWithAggregatesInput | QuranTextScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"QuranText"> | bigint | number
    sura?: BigIntNullableWithAggregatesFilter<"QuranText"> | bigint | number | null
    aya?: BigIntNullableWithAggregatesFilter<"QuranText"> | bigint | number | null
    text?: StringNullableWithAggregatesFilter<"QuranText"> | string | null
  }

  export type SurahDescriptionWhereInput = {
    AND?: SurahDescriptionWhereInput | SurahDescriptionWhereInput[]
    OR?: SurahDescriptionWhereInput[]
    NOT?: SurahDescriptionWhereInput | SurahDescriptionWhereInput[]
    surahId?: BigIntFilter<"SurahDescription"> | bigint | number
    description?: StringNullableFilter<"SurahDescription"> | string | null
    updatedAt?: DateTimeNullableFilter<"SurahDescription"> | Date | string | null
  }

  export type SurahDescriptionOrderByWithRelationInput = {
    surahId?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type SurahDescriptionWhereUniqueInput = Prisma.AtLeast<{
    surahId?: bigint | number
    AND?: SurahDescriptionWhereInput | SurahDescriptionWhereInput[]
    OR?: SurahDescriptionWhereInput[]
    NOT?: SurahDescriptionWhereInput | SurahDescriptionWhereInput[]
    description?: StringNullableFilter<"SurahDescription"> | string | null
    updatedAt?: DateTimeNullableFilter<"SurahDescription"> | Date | string | null
  }, "surahId">

  export type SurahDescriptionOrderByWithAggregationInput = {
    surahId?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: SurahDescriptionCountOrderByAggregateInput
    _avg?: SurahDescriptionAvgOrderByAggregateInput
    _max?: SurahDescriptionMaxOrderByAggregateInput
    _min?: SurahDescriptionMinOrderByAggregateInput
    _sum?: SurahDescriptionSumOrderByAggregateInput
  }

  export type SurahDescriptionScalarWhereWithAggregatesInput = {
    AND?: SurahDescriptionScalarWhereWithAggregatesInput | SurahDescriptionScalarWhereWithAggregatesInput[]
    OR?: SurahDescriptionScalarWhereWithAggregatesInput[]
    NOT?: SurahDescriptionScalarWhereWithAggregatesInput | SurahDescriptionScalarWhereWithAggregatesInput[]
    surahId?: BigIntWithAggregatesFilter<"SurahDescription"> | bigint | number
    description?: StringNullableWithAggregatesFilter<"SurahDescription"> | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"SurahDescription"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    userType?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookmarks?: UserBookmarkListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookmarks?: UserBookmarkOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    userType?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookmarks?: UserBookmarkListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    userType?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserBookmarkWhereInput = {
    AND?: UserBookmarkWhereInput | UserBookmarkWhereInput[]
    OR?: UserBookmarkWhereInput[]
    NOT?: UserBookmarkWhereInput | UserBookmarkWhereInput[]
    id?: StringFilter<"UserBookmark"> | string
    userid?: StringFilter<"UserBookmark"> | string
    surahid?: IntFilter<"UserBookmark"> | number
    versenumber?: IntFilter<"UserBookmark"> | number
    versetext?: StringFilter<"UserBookmark"> | string
    surahname?: StringFilter<"UserBookmark"> | string
    translation?: StringFilter<"UserBookmark"> | string
    notes?: StringNullableFilter<"UserBookmark"> | string | null
    createdat?: DateTimeFilter<"UserBookmark"> | Date | string
    updatedat?: DateTimeFilter<"UserBookmark"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserBookmarkOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    surahid?: SortOrder
    versenumber?: SortOrder
    versetext?: SortOrder
    surahname?: SortOrder
    translation?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserBookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userid_surahid_versenumber?: UserBookmarkUseridSurahidVersenumberCompoundUniqueInput
    AND?: UserBookmarkWhereInput | UserBookmarkWhereInput[]
    OR?: UserBookmarkWhereInput[]
    NOT?: UserBookmarkWhereInput | UserBookmarkWhereInput[]
    userid?: StringFilter<"UserBookmark"> | string
    surahid?: IntFilter<"UserBookmark"> | number
    versenumber?: IntFilter<"UserBookmark"> | number
    versetext?: StringFilter<"UserBookmark"> | string
    surahname?: StringFilter<"UserBookmark"> | string
    translation?: StringFilter<"UserBookmark"> | string
    notes?: StringNullableFilter<"UserBookmark"> | string | null
    createdat?: DateTimeFilter<"UserBookmark"> | Date | string
    updatedat?: DateTimeFilter<"UserBookmark"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userid_surahid_versenumber">

  export type UserBookmarkOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    surahid?: SortOrder
    versenumber?: SortOrder
    versetext?: SortOrder
    surahname?: SortOrder
    translation?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    _count?: UserBookmarkCountOrderByAggregateInput
    _avg?: UserBookmarkAvgOrderByAggregateInput
    _max?: UserBookmarkMaxOrderByAggregateInput
    _min?: UserBookmarkMinOrderByAggregateInput
    _sum?: UserBookmarkSumOrderByAggregateInput
  }

  export type UserBookmarkScalarWhereWithAggregatesInput = {
    AND?: UserBookmarkScalarWhereWithAggregatesInput | UserBookmarkScalarWhereWithAggregatesInput[]
    OR?: UserBookmarkScalarWhereWithAggregatesInput[]
    NOT?: UserBookmarkScalarWhereWithAggregatesInput | UserBookmarkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserBookmark"> | string
    userid?: StringWithAggregatesFilter<"UserBookmark"> | string
    surahid?: IntWithAggregatesFilter<"UserBookmark"> | number
    versenumber?: IntWithAggregatesFilter<"UserBookmark"> | number
    versetext?: StringWithAggregatesFilter<"UserBookmark"> | string
    surahname?: StringWithAggregatesFilter<"UserBookmark"> | string
    translation?: StringWithAggregatesFilter<"UserBookmark"> | string
    notes?: StringNullableWithAggregatesFilter<"UserBookmark"> | string | null
    createdat?: DateTimeWithAggregatesFilter<"UserBookmark"> | Date | string
    updatedat?: DateTimeWithAggregatesFilter<"UserBookmark"> | Date | string
  }

  export type QuranTransliterationWhereInput = {
    AND?: QuranTransliterationWhereInput | QuranTransliterationWhereInput[]
    OR?: QuranTransliterationWhereInput[]
    NOT?: QuranTransliterationWhereInput | QuranTransliterationWhereInput[]
    id?: BigIntFilter<"QuranTransliteration"> | bigint | number
    sura?: BigIntFilter<"QuranTransliteration"> | bigint | number
    aya?: BigIntFilter<"QuranTransliteration"> | bigint | number
    rawText?: StringNullableFilter<"QuranTransliteration"> | string | null
    cleanText?: StringNullableFilter<"QuranTransliteration"> | string | null
    formattedText?: StringNullableFilter<"QuranTransliteration"> | string | null
    source?: StringNullableFilter<"QuranTransliteration"> | string | null
    createdAt?: DateTimeFilter<"QuranTransliteration"> | Date | string
  }

  export type QuranTransliterationOrderByWithRelationInput = {
    id?: SortOrder
    sura?: SortOrder
    aya?: SortOrder
    rawText?: SortOrderInput | SortOrder
    cleanText?: SortOrderInput | SortOrder
    formattedText?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type QuranTransliterationWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    sura_aya?: QuranTransliterationSuraAyaCompoundUniqueInput
    AND?: QuranTransliterationWhereInput | QuranTransliterationWhereInput[]
    OR?: QuranTransliterationWhereInput[]
    NOT?: QuranTransliterationWhereInput | QuranTransliterationWhereInput[]
    sura?: BigIntFilter<"QuranTransliteration"> | bigint | number
    aya?: BigIntFilter<"QuranTransliteration"> | bigint | number
    rawText?: StringNullableFilter<"QuranTransliteration"> | string | null
    cleanText?: StringNullableFilter<"QuranTransliteration"> | string | null
    formattedText?: StringNullableFilter<"QuranTransliteration"> | string | null
    source?: StringNullableFilter<"QuranTransliteration"> | string | null
    createdAt?: DateTimeFilter<"QuranTransliteration"> | Date | string
  }, "id" | "sura_aya">

  export type QuranTransliterationOrderByWithAggregationInput = {
    id?: SortOrder
    sura?: SortOrder
    aya?: SortOrder
    rawText?: SortOrderInput | SortOrder
    cleanText?: SortOrderInput | SortOrder
    formattedText?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: QuranTransliterationCountOrderByAggregateInput
    _avg?: QuranTransliterationAvgOrderByAggregateInput
    _max?: QuranTransliterationMaxOrderByAggregateInput
    _min?: QuranTransliterationMinOrderByAggregateInput
    _sum?: QuranTransliterationSumOrderByAggregateInput
  }

  export type QuranTransliterationScalarWhereWithAggregatesInput = {
    AND?: QuranTransliterationScalarWhereWithAggregatesInput | QuranTransliterationScalarWhereWithAggregatesInput[]
    OR?: QuranTransliterationScalarWhereWithAggregatesInput[]
    NOT?: QuranTransliterationScalarWhereWithAggregatesInput | QuranTransliterationScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"QuranTransliteration"> | bigint | number
    sura?: BigIntWithAggregatesFilter<"QuranTransliteration"> | bigint | number
    aya?: BigIntWithAggregatesFilter<"QuranTransliteration"> | bigint | number
    rawText?: StringNullableWithAggregatesFilter<"QuranTransliteration"> | string | null
    cleanText?: StringNullableWithAggregatesFilter<"QuranTransliteration"> | string | null
    formattedText?: StringNullableWithAggregatesFilter<"QuranTransliteration"> | string | null
    source?: StringNullableWithAggregatesFilter<"QuranTransliteration"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuranTransliteration"> | Date | string
  }

  export type EnYusufaliCreateInput = {
    index?: bigint | number
    sura?: bigint | number | null
    aya?: bigint | number | null
    text?: string | null
  }

  export type EnYusufaliUncheckedCreateInput = {
    index?: bigint | number
    sura?: bigint | number | null
    aya?: bigint | number | null
    text?: string | null
  }

  export type EnYusufaliUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    sura?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    aya?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnYusufaliUncheckedUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    sura?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    aya?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnYusufaliCreateManyInput = {
    index?: bigint | number
    sura?: bigint | number | null
    aya?: bigint | number | null
    text?: string | null
  }

  export type EnYusufaliUpdateManyMutationInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    sura?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    aya?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnYusufaliUncheckedUpdateManyInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    sura?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    aya?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuranSajdaCreateInput = {
    sajdaId?: bigint | number
    surahNumber?: bigint | number | null
    ayahNumber?: bigint | number | null
    type?: string | null
  }

  export type QuranSajdaUncheckedCreateInput = {
    sajdaId?: bigint | number
    surahNumber?: bigint | number | null
    ayahNumber?: bigint | number | null
    type?: string | null
  }

  export type QuranSajdaUpdateInput = {
    sajdaId?: BigIntFieldUpdateOperationsInput | bigint | number
    surahNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ayahNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuranSajdaUncheckedUpdateInput = {
    sajdaId?: BigIntFieldUpdateOperationsInput | bigint | number
    surahNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ayahNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuranSajdaCreateManyInput = {
    sajdaId?: bigint | number
    surahNumber?: bigint | number | null
    ayahNumber?: bigint | number | null
    type?: string | null
  }

  export type QuranSajdaUpdateManyMutationInput = {
    sajdaId?: BigIntFieldUpdateOperationsInput | bigint | number
    surahNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ayahNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuranSajdaUncheckedUpdateManyInput = {
    sajdaId?: BigIntFieldUpdateOperationsInput | bigint | number
    surahNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ayahNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuranSurahCreateInput = {
    number?: bigint | number
    arabicName?: string | null
    transliteration?: string | null
    englishName?: string | null
    ayas?: bigint | number | null
    revelationType?: string | null
    chronologicalOrder?: bigint | number | null
    rukus?: bigint | number | null
    startIndex?: bigint | number | null
  }

  export type QuranSurahUncheckedCreateInput = {
    number?: bigint | number
    arabicName?: string | null
    transliteration?: string | null
    englishName?: string | null
    ayas?: bigint | number | null
    revelationType?: string | null
    chronologicalOrder?: bigint | number | null
    rukus?: bigint | number | null
    startIndex?: bigint | number | null
  }

  export type QuranSurahUpdateInput = {
    number?: BigIntFieldUpdateOperationsInput | bigint | number
    arabicName?: NullableStringFieldUpdateOperationsInput | string | null
    transliteration?: NullableStringFieldUpdateOperationsInput | string | null
    englishName?: NullableStringFieldUpdateOperationsInput | string | null
    ayas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    revelationType?: NullableStringFieldUpdateOperationsInput | string | null
    chronologicalOrder?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rukus?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    startIndex?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type QuranSurahUncheckedUpdateInput = {
    number?: BigIntFieldUpdateOperationsInput | bigint | number
    arabicName?: NullableStringFieldUpdateOperationsInput | string | null
    transliteration?: NullableStringFieldUpdateOperationsInput | string | null
    englishName?: NullableStringFieldUpdateOperationsInput | string | null
    ayas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    revelationType?: NullableStringFieldUpdateOperationsInput | string | null
    chronologicalOrder?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rukus?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    startIndex?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type QuranSurahCreateManyInput = {
    number?: bigint | number
    arabicName?: string | null
    transliteration?: string | null
    englishName?: string | null
    ayas?: bigint | number | null
    revelationType?: string | null
    chronologicalOrder?: bigint | number | null
    rukus?: bigint | number | null
    startIndex?: bigint | number | null
  }

  export type QuranSurahUpdateManyMutationInput = {
    number?: BigIntFieldUpdateOperationsInput | bigint | number
    arabicName?: NullableStringFieldUpdateOperationsInput | string | null
    transliteration?: NullableStringFieldUpdateOperationsInput | string | null
    englishName?: NullableStringFieldUpdateOperationsInput | string | null
    ayas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    revelationType?: NullableStringFieldUpdateOperationsInput | string | null
    chronologicalOrder?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rukus?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    startIndex?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type QuranSurahUncheckedUpdateManyInput = {
    number?: BigIntFieldUpdateOperationsInput | bigint | number
    arabicName?: NullableStringFieldUpdateOperationsInput | string | null
    transliteration?: NullableStringFieldUpdateOperationsInput | string | null
    englishName?: NullableStringFieldUpdateOperationsInput | string | null
    ayas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    revelationType?: NullableStringFieldUpdateOperationsInput | string | null
    chronologicalOrder?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rukus?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    startIndex?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type QuranTextCreateInput = {
    id?: bigint | number
    sura?: bigint | number | null
    aya?: bigint | number | null
    text?: string | null
  }

  export type QuranTextUncheckedCreateInput = {
    id?: bigint | number
    sura?: bigint | number | null
    aya?: bigint | number | null
    text?: string | null
  }

  export type QuranTextUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    sura?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    aya?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuranTextUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    sura?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    aya?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuranTextCreateManyInput = {
    id?: bigint | number
    sura?: bigint | number | null
    aya?: bigint | number | null
    text?: string | null
  }

  export type QuranTextUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    sura?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    aya?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuranTextUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    sura?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    aya?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SurahDescriptionCreateInput = {
    surahId: bigint | number
    description?: string | null
    updatedAt?: Date | string | null
  }

  export type SurahDescriptionUncheckedCreateInput = {
    surahId: bigint | number
    description?: string | null
    updatedAt?: Date | string | null
  }

  export type SurahDescriptionUpdateInput = {
    surahId?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SurahDescriptionUncheckedUpdateInput = {
    surahId?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SurahDescriptionCreateManyInput = {
    surahId: bigint | number
    description?: string | null
    updatedAt?: Date | string | null
  }

  export type SurahDescriptionUpdateManyMutationInput = {
    surahId?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SurahDescriptionUncheckedUpdateManyInput = {
    surahId?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    id: string
    email?: string | null
    name?: string | null
    userType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarks?: UserBookmarkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email?: string | null
    name?: string | null
    userType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarks?: UserBookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: UserBookmarkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: UserBookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email?: string | null
    name?: string | null
    userType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookmarkCreateInput = {
    id?: string
    surahid: number
    versenumber: number
    versetext: string
    surahname: string
    translation: string
    notes?: string | null
    createdat?: Date | string
    updatedat?: Date | string
    user: UserCreateNestedOneWithoutBookmarksInput
  }

  export type UserBookmarkUncheckedCreateInput = {
    id?: string
    userid: string
    surahid: number
    versenumber: number
    versetext: string
    surahname: string
    translation: string
    notes?: string | null
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type UserBookmarkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    surahid?: IntFieldUpdateOperationsInput | number
    versenumber?: IntFieldUpdateOperationsInput | number
    versetext?: StringFieldUpdateOperationsInput | string
    surahname?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type UserBookmarkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    surahid?: IntFieldUpdateOperationsInput | number
    versenumber?: IntFieldUpdateOperationsInput | number
    versetext?: StringFieldUpdateOperationsInput | string
    surahname?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookmarkCreateManyInput = {
    id?: string
    userid: string
    surahid: number
    versenumber: number
    versetext: string
    surahname: string
    translation: string
    notes?: string | null
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type UserBookmarkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    surahid?: IntFieldUpdateOperationsInput | number
    versenumber?: IntFieldUpdateOperationsInput | number
    versetext?: StringFieldUpdateOperationsInput | string
    surahname?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookmarkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    surahid?: IntFieldUpdateOperationsInput | number
    versenumber?: IntFieldUpdateOperationsInput | number
    versetext?: StringFieldUpdateOperationsInput | string
    surahname?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuranTransliterationCreateInput = {
    id?: bigint | number
    sura: bigint | number
    aya: bigint | number
    rawText?: string | null
    cleanText?: string | null
    formattedText?: string | null
    source?: string | null
    createdAt?: Date | string
  }

  export type QuranTransliterationUncheckedCreateInput = {
    id?: bigint | number
    sura: bigint | number
    aya: bigint | number
    rawText?: string | null
    cleanText?: string | null
    formattedText?: string | null
    source?: string | null
    createdAt?: Date | string
  }

  export type QuranTransliterationUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    sura?: BigIntFieldUpdateOperationsInput | bigint | number
    aya?: BigIntFieldUpdateOperationsInput | bigint | number
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    cleanText?: NullableStringFieldUpdateOperationsInput | string | null
    formattedText?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuranTransliterationUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    sura?: BigIntFieldUpdateOperationsInput | bigint | number
    aya?: BigIntFieldUpdateOperationsInput | bigint | number
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    cleanText?: NullableStringFieldUpdateOperationsInput | string | null
    formattedText?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuranTransliterationCreateManyInput = {
    id?: bigint | number
    sura: bigint | number
    aya: bigint | number
    rawText?: string | null
    cleanText?: string | null
    formattedText?: string | null
    source?: string | null
    createdAt?: Date | string
  }

  export type QuranTransliterationUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    sura?: BigIntFieldUpdateOperationsInput | bigint | number
    aya?: BigIntFieldUpdateOperationsInput | bigint | number
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    cleanText?: NullableStringFieldUpdateOperationsInput | string | null
    formattedText?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuranTransliterationUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    sura?: BigIntFieldUpdateOperationsInput | bigint | number
    aya?: BigIntFieldUpdateOperationsInput | bigint | number
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    cleanText?: NullableStringFieldUpdateOperationsInput | string | null
    formattedText?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EnYusufaliCountOrderByAggregateInput = {
    index?: SortOrder
    sura?: SortOrder
    aya?: SortOrder
    text?: SortOrder
  }

  export type EnYusufaliAvgOrderByAggregateInput = {
    index?: SortOrder
    sura?: SortOrder
    aya?: SortOrder
  }

  export type EnYusufaliMaxOrderByAggregateInput = {
    index?: SortOrder
    sura?: SortOrder
    aya?: SortOrder
    text?: SortOrder
  }

  export type EnYusufaliMinOrderByAggregateInput = {
    index?: SortOrder
    sura?: SortOrder
    aya?: SortOrder
    text?: SortOrder
  }

  export type EnYusufaliSumOrderByAggregateInput = {
    index?: SortOrder
    sura?: SortOrder
    aya?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type QuranSajdaCountOrderByAggregateInput = {
    sajdaId?: SortOrder
    surahNumber?: SortOrder
    ayahNumber?: SortOrder
    type?: SortOrder
  }

  export type QuranSajdaAvgOrderByAggregateInput = {
    sajdaId?: SortOrder
    surahNumber?: SortOrder
    ayahNumber?: SortOrder
  }

  export type QuranSajdaMaxOrderByAggregateInput = {
    sajdaId?: SortOrder
    surahNumber?: SortOrder
    ayahNumber?: SortOrder
    type?: SortOrder
  }

  export type QuranSajdaMinOrderByAggregateInput = {
    sajdaId?: SortOrder
    surahNumber?: SortOrder
    ayahNumber?: SortOrder
    type?: SortOrder
  }

  export type QuranSajdaSumOrderByAggregateInput = {
    sajdaId?: SortOrder
    surahNumber?: SortOrder
    ayahNumber?: SortOrder
  }

  export type QuranSurahCountOrderByAggregateInput = {
    number?: SortOrder
    arabicName?: SortOrder
    transliteration?: SortOrder
    englishName?: SortOrder
    ayas?: SortOrder
    revelationType?: SortOrder
    chronologicalOrder?: SortOrder
    rukus?: SortOrder
    startIndex?: SortOrder
  }

  export type QuranSurahAvgOrderByAggregateInput = {
    number?: SortOrder
    ayas?: SortOrder
    chronologicalOrder?: SortOrder
    rukus?: SortOrder
    startIndex?: SortOrder
  }

  export type QuranSurahMaxOrderByAggregateInput = {
    number?: SortOrder
    arabicName?: SortOrder
    transliteration?: SortOrder
    englishName?: SortOrder
    ayas?: SortOrder
    revelationType?: SortOrder
    chronologicalOrder?: SortOrder
    rukus?: SortOrder
    startIndex?: SortOrder
  }

  export type QuranSurahMinOrderByAggregateInput = {
    number?: SortOrder
    arabicName?: SortOrder
    transliteration?: SortOrder
    englishName?: SortOrder
    ayas?: SortOrder
    revelationType?: SortOrder
    chronologicalOrder?: SortOrder
    rukus?: SortOrder
    startIndex?: SortOrder
  }

  export type QuranSurahSumOrderByAggregateInput = {
    number?: SortOrder
    ayas?: SortOrder
    chronologicalOrder?: SortOrder
    rukus?: SortOrder
    startIndex?: SortOrder
  }

  export type QuranTextCountOrderByAggregateInput = {
    id?: SortOrder
    sura?: SortOrder
    aya?: SortOrder
    text?: SortOrder
  }

  export type QuranTextAvgOrderByAggregateInput = {
    id?: SortOrder
    sura?: SortOrder
    aya?: SortOrder
  }

  export type QuranTextMaxOrderByAggregateInput = {
    id?: SortOrder
    sura?: SortOrder
    aya?: SortOrder
    text?: SortOrder
  }

  export type QuranTextMinOrderByAggregateInput = {
    id?: SortOrder
    sura?: SortOrder
    aya?: SortOrder
    text?: SortOrder
  }

  export type QuranTextSumOrderByAggregateInput = {
    id?: SortOrder
    sura?: SortOrder
    aya?: SortOrder
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

  export type SurahDescriptionCountOrderByAggregateInput = {
    surahId?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SurahDescriptionAvgOrderByAggregateInput = {
    surahId?: SortOrder
  }

  export type SurahDescriptionMaxOrderByAggregateInput = {
    surahId?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SurahDescriptionMinOrderByAggregateInput = {
    surahId?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SurahDescriptionSumOrderByAggregateInput = {
    surahId?: SortOrder
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

  export type UserBookmarkListRelationFilter = {
    every?: UserBookmarkWhereInput
    some?: UserBookmarkWhereInput
    none?: UserBookmarkWhereInput
  }

  export type UserBookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserBookmarkUseridSurahidVersenumberCompoundUniqueInput = {
    userid: string
    surahid: number
    versenumber: number
  }

  export type UserBookmarkCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    surahid?: SortOrder
    versenumber?: SortOrder
    versetext?: SortOrder
    surahname?: SortOrder
    translation?: SortOrder
    notes?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type UserBookmarkAvgOrderByAggregateInput = {
    surahid?: SortOrder
    versenumber?: SortOrder
  }

  export type UserBookmarkMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    surahid?: SortOrder
    versenumber?: SortOrder
    versetext?: SortOrder
    surahname?: SortOrder
    translation?: SortOrder
    notes?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type UserBookmarkMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    surahid?: SortOrder
    versenumber?: SortOrder
    versetext?: SortOrder
    surahname?: SortOrder
    translation?: SortOrder
    notes?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type UserBookmarkSumOrderByAggregateInput = {
    surahid?: SortOrder
    versenumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type QuranTransliterationSuraAyaCompoundUniqueInput = {
    sura: bigint | number
    aya: bigint | number
  }

  export type QuranTransliterationCountOrderByAggregateInput = {
    id?: SortOrder
    sura?: SortOrder
    aya?: SortOrder
    rawText?: SortOrder
    cleanText?: SortOrder
    formattedText?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type QuranTransliterationAvgOrderByAggregateInput = {
    id?: SortOrder
    sura?: SortOrder
    aya?: SortOrder
  }

  export type QuranTransliterationMaxOrderByAggregateInput = {
    id?: SortOrder
    sura?: SortOrder
    aya?: SortOrder
    rawText?: SortOrder
    cleanText?: SortOrder
    formattedText?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type QuranTransliterationMinOrderByAggregateInput = {
    id?: SortOrder
    sura?: SortOrder
    aya?: SortOrder
    rawText?: SortOrder
    cleanText?: SortOrder
    formattedText?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type QuranTransliterationSumOrderByAggregateInput = {
    id?: SortOrder
    sura?: SortOrder
    aya?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserBookmarkCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBookmarkCreateWithoutUserInput, UserBookmarkUncheckedCreateWithoutUserInput> | UserBookmarkCreateWithoutUserInput[] | UserBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBookmarkCreateOrConnectWithoutUserInput | UserBookmarkCreateOrConnectWithoutUserInput[]
    createMany?: UserBookmarkCreateManyUserInputEnvelope
    connect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
  }

  export type UserBookmarkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBookmarkCreateWithoutUserInput, UserBookmarkUncheckedCreateWithoutUserInput> | UserBookmarkCreateWithoutUserInput[] | UserBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBookmarkCreateOrConnectWithoutUserInput | UserBookmarkCreateOrConnectWithoutUserInput[]
    createMany?: UserBookmarkCreateManyUserInputEnvelope
    connect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserBookmarkUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBookmarkCreateWithoutUserInput, UserBookmarkUncheckedCreateWithoutUserInput> | UserBookmarkCreateWithoutUserInput[] | UserBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBookmarkCreateOrConnectWithoutUserInput | UserBookmarkCreateOrConnectWithoutUserInput[]
    upsert?: UserBookmarkUpsertWithWhereUniqueWithoutUserInput | UserBookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBookmarkCreateManyUserInputEnvelope
    set?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    disconnect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    delete?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    connect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    update?: UserBookmarkUpdateWithWhereUniqueWithoutUserInput | UserBookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBookmarkUpdateManyWithWhereWithoutUserInput | UserBookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBookmarkScalarWhereInput | UserBookmarkScalarWhereInput[]
  }

  export type UserBookmarkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBookmarkCreateWithoutUserInput, UserBookmarkUncheckedCreateWithoutUserInput> | UserBookmarkCreateWithoutUserInput[] | UserBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBookmarkCreateOrConnectWithoutUserInput | UserBookmarkCreateOrConnectWithoutUserInput[]
    upsert?: UserBookmarkUpsertWithWhereUniqueWithoutUserInput | UserBookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBookmarkCreateManyUserInputEnvelope
    set?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    disconnect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    delete?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    connect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    update?: UserBookmarkUpdateWithWhereUniqueWithoutUserInput | UserBookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBookmarkUpdateManyWithWhereWithoutUserInput | UserBookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBookmarkScalarWhereInput | UserBookmarkScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    upsert?: UserUpsertWithoutBookmarksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookmarksInput, UserUpdateWithoutBookmarksInput>, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserBookmarkCreateWithoutUserInput = {
    id?: string
    surahid: number
    versenumber: number
    versetext: string
    surahname: string
    translation: string
    notes?: string | null
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type UserBookmarkUncheckedCreateWithoutUserInput = {
    id?: string
    surahid: number
    versenumber: number
    versetext: string
    surahname: string
    translation: string
    notes?: string | null
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type UserBookmarkCreateOrConnectWithoutUserInput = {
    where: UserBookmarkWhereUniqueInput
    create: XOR<UserBookmarkCreateWithoutUserInput, UserBookmarkUncheckedCreateWithoutUserInput>
  }

  export type UserBookmarkCreateManyUserInputEnvelope = {
    data: UserBookmarkCreateManyUserInput | UserBookmarkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserBookmarkUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBookmarkWhereUniqueInput
    update: XOR<UserBookmarkUpdateWithoutUserInput, UserBookmarkUncheckedUpdateWithoutUserInput>
    create: XOR<UserBookmarkCreateWithoutUserInput, UserBookmarkUncheckedCreateWithoutUserInput>
  }

  export type UserBookmarkUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBookmarkWhereUniqueInput
    data: XOR<UserBookmarkUpdateWithoutUserInput, UserBookmarkUncheckedUpdateWithoutUserInput>
  }

  export type UserBookmarkUpdateManyWithWhereWithoutUserInput = {
    where: UserBookmarkScalarWhereInput
    data: XOR<UserBookmarkUpdateManyMutationInput, UserBookmarkUncheckedUpdateManyWithoutUserInput>
  }

  export type UserBookmarkScalarWhereInput = {
    AND?: UserBookmarkScalarWhereInput | UserBookmarkScalarWhereInput[]
    OR?: UserBookmarkScalarWhereInput[]
    NOT?: UserBookmarkScalarWhereInput | UserBookmarkScalarWhereInput[]
    id?: StringFilter<"UserBookmark"> | string
    userid?: StringFilter<"UserBookmark"> | string
    surahid?: IntFilter<"UserBookmark"> | number
    versenumber?: IntFilter<"UserBookmark"> | number
    versetext?: StringFilter<"UserBookmark"> | string
    surahname?: StringFilter<"UserBookmark"> | string
    translation?: StringFilter<"UserBookmark"> | string
    notes?: StringNullableFilter<"UserBookmark"> | string | null
    createdat?: DateTimeFilter<"UserBookmark"> | Date | string
    updatedat?: DateTimeFilter<"UserBookmark"> | Date | string
  }

  export type UserCreateWithoutBookmarksInput = {
    id: string
    email?: string | null
    name?: string | null
    userType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBookmarksInput = {
    id: string
    email?: string | null
    name?: string | null
    userType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBookmarksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
  }

  export type UserUpsertWithoutBookmarksInput = {
    update: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookmarkCreateManyUserInput = {
    id?: string
    surahid: number
    versenumber: number
    versetext: string
    surahname: string
    translation: string
    notes?: string | null
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type UserBookmarkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    surahid?: IntFieldUpdateOperationsInput | number
    versenumber?: IntFieldUpdateOperationsInput | number
    versetext?: StringFieldUpdateOperationsInput | string
    surahname?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookmarkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    surahid?: IntFieldUpdateOperationsInput | number
    versenumber?: IntFieldUpdateOperationsInput | number
    versetext?: StringFieldUpdateOperationsInput | string
    surahname?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookmarkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    surahid?: IntFieldUpdateOperationsInput | number
    versenumber?: IntFieldUpdateOperationsInput | number
    versetext?: StringFieldUpdateOperationsInput | string
    surahname?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnYusufaliDefaultArgs instead
     */
    export type EnYusufaliArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EnYusufaliDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuranSajdaDefaultArgs instead
     */
    export type QuranSajdaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuranSajdaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuranSurahDefaultArgs instead
     */
    export type QuranSurahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuranSurahDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuranTextDefaultArgs instead
     */
    export type QuranTextArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuranTextDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SurahDescriptionDefaultArgs instead
     */
    export type SurahDescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SurahDescriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserBookmarkDefaultArgs instead
     */
    export type UserBookmarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserBookmarkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuranTransliterationDefaultArgs instead
     */
    export type QuranTransliterationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuranTransliterationDefaultArgs<ExtArgs>

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