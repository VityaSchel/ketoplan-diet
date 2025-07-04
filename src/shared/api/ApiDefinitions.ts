/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AdvertisingCompanyBody {
  status: "active" | "canceled";
}

export interface AdvertisingCompanyResponse {
  id: number;
  status: string;
}

export interface CheckoutCloudpaymentsPaymentResponse {
  amount: number;
  amountWithoutDiscount: number;
  cloudpaymentsPublicId: string;
  description: string;
  money: string;
  moneyWithoutDiscount: string;
  status: string;
}

export interface CloudpaymentsNotificationResponse {
  code: number;
}

export interface CloudpaymentsReceipt {
  Items?: {
    amount?: number;
    label?: string;
    method?: number;
    object?: number;
    price?: number;
    quantity?: number;
    vat?: number;
  }[];
  amounts?: {
    advancePayment?: number;
    credit?: number;
    electronic?: number;
    provision?: number;
  };
  email?: string;
  isBso?: boolean;
  phone?: string;
  taxationSystem?: number;
}

export interface CvBasedQuestionnaireBody {
  activityInterval:
    | "MINIMAL"
    | "FREQUENT_WALKS"
    | "EXERCISE_ONCE_PER_WEEK"
    | "EXERCISE_EVERY_OTHER_DAY"
    | "EXERCISE_EVERYDAY";
  /**
   * @min 5
   * @max 100
   */
  age: number;
  badHabits: (
    | "LACK_OF_SLEEP"
    | "NIGHT_FOOD"
    | "SALT_OVERCONSUMPTION"
    | "SUGAR_OVERCONSUMPTION"
    | "SODA_OVERCONSUMPTION"
  )[];
  currentWeight: number;
  dayType: "OFFICE_WORK" | "OFFICE_FREELY" | "ON_FEET" | "MANUAL_LABOR" | "HOME";
  gender: "FEMALE" | "MALE";
  height: number;
  otherFood: ("EGGS" | "NUTS" | "CHEESE" | "COTTAGE" | "BUTTER" | "COCONUT")[];
  proteinSources: ("CHICKEN" | "PORK" | "BEEF" | "TURKEY" | "BEACON" | "NO_MEAT" | "FISH" | "SEAFOOD")[];
  targetWeight: number;
  vegetables: (
    | "BROCCOLI"
    | "MUSHROOMS"
    | "ZUCCHINI"
    | "CAULIFLOWER"
    | "AVOCADO"
    | "ASPARAGUS"
    | "BELL PEPPER"
    | "EGGPLANT"
  )[];
}

export interface CvBasedQuestionnaireResponse {
  achievableWeightAfter28Days: number;
  foodType: "dump" | "gain";
  imt: number;
  metabolicAge: number;
  recommendedAmountKcal: number;
  recommendedAmountWater: number;
}

export interface ErrorResponse {
  message: string;
}

export interface PayCheckoutCloudpaymentsBody {
  cryptogram: string;
}

export interface PayCheckoutCloudpaymentsResponse {
  MD: string;
  PaReq: string;
  TermUrl: string;
  /** @example "POST" */
  redirectMethod: string;
  redirectParams?: {
    key?: string;
    value?: string;
  }[];
  /** @example "https://demo.cloudpayments.ru/acs" */
  redirectUrl: string;
}

export interface PayWidgetCloudpaymentsResponse {
  cloudpayments: {
    accountId: string;
    amount: number;
    currency: string;
    description: string;
    invoiceId: string;
    publicId: string;
  };
}

export interface PaymentRequired {
  paymentId: string;
}

export interface PaymentSetEmailBody {
  email: string;
}

export interface PricesResponse {
  amount: number;
  amountWithoutDiscount: number;
  firstCheckbox: string;
  secondCheckbox: string;
}

export interface Principal {
  key: string;
}

export interface SendPlanMailBody {
  email: string;
}

export interface SubscriptionUnsubscribeBody {
  firstNumbers: string;
  lastNumbers: string;
}

export interface WidgetCloudpaymentsPaymentResponse {
  amount: number;
  amountWithoutDiscount: number;
  email: string;
  status: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title KetoPlan
 * @version production
 *
 * KetoPlan
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  advertisingCompanies = {
    /**
     * No description
     *
     * @tags advertising_company
     * @name AdvertisingCompaniesList
     * @request GET:/advertising_companies
     */
    advertisingCompaniesList: (params: RequestParams = {}) =>
      this.request<AdvertisingCompanyResponse[], ErrorResponse>({
        path: `/advertising_companies`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags advertising_companies
     * @name AdvertisingCompaniesDetail
     * @request GET:/advertising_companies/{id}
     */
    advertisingCompaniesDetail: (id: number, params: RequestParams = {}) =>
      this.request<AdvertisingCompanyResponse, ErrorResponse>({
        path: `/advertising_companies/${id}`,
        method: "GET",
        ...params,
      }),
  };
  cvBasedQuestionnaire = {
    /**
     * No description
     *
     * @tags cv_based_questionnaire
     * @name CvBasedQuestionnaireCreate
     * @request POST:/cv_based_questionnaire
     */
    cvBasedQuestionnaireCreate: (body: CvBasedQuestionnaireBody, params: RequestParams = {}) =>
      this.request<CvBasedQuestionnaireResponse, ErrorResponse>({
        path: `/cv_based_questionnaire`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        ...params,
      }),
  };
  notifications = {
    /**
     * No description
     *
     * @tags notifications_cloudpayments
     * @name CloudpaymentsFailCreate
     * @request POST:/notifications/cloudpayments/fail
     * @secure
     */
    cloudpaymentsFailCreate: (
      data: {
        Amount: number;
        TransactionId: number;
        DateTime: string;
        Issuer?: string;
        ReasonCode: number;
        InvoiceId: string;
        Data?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CloudpaymentsNotificationResponse, ErrorResponse | void>({
        path: `/notifications/cloudpayments/fail`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notifications_cloudpayments
     * @name CloudpaymentsPayCreate
     * @request POST:/notifications/cloudpayments/pay
     * @secure
     */
    cloudpaymentsPayCreate: (
      data: {
        Amount: number;
        TransactionId: number;
        Issuer?: string;
        DateTime: string;
        InvoiceId: string;
        Email?: string;
        CardFirstSix: string;
        CardLastFour: string;
        TestMode: number;
        Token?: string;
        Data?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CloudpaymentsNotificationResponse, ErrorResponse | void>({
        path: `/notifications/cloudpayments/pay`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notifications_cloudpayments
     * @name CloudpaymentsRefundCreate
     * @request POST:/notifications/cloudpayments/refund
     * @secure
     */
    cloudpaymentsRefundCreate: (
      data: {
        TransactionId: number;
        PaymentTransactionId: number;
        Amount: number;
        DateTime: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CloudpaymentsNotificationResponse, ErrorResponse | void>({
        path: `/notifications/cloudpayments/refund`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),
  };
  payments = {
    /**
     * No description
     *
     * @tags payment_cloudpayments_checkout
     * @name CloudpaymentsCheckoutDetail
     * @request GET:/payments/{id}/cloudpayments/checkout
     */
    cloudpaymentsCheckoutDetail: (id: string, params: RequestParams = {}) =>
      this.request<CheckoutCloudpaymentsPaymentResponse, ErrorResponse>({
        path: `/payments/${id}/cloudpayments/checkout`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags payment_cloudpayments_checkout
     * @name CloudpaymentsCheckoutComplete3DsCreate
     * @request POST:/payments/{id}/cloudpayments/checkout/complete3ds
     */
    cloudpaymentsCheckoutComplete3DsCreate: (
      id: string,
      data: {
        MD: number;
        PaRes: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | ErrorResponse>({
        path: `/payments/${id}/cloudpayments/checkout/complete3ds`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags payment_cloudpayments_checkout
     * @name CloudpaymentsCheckoutPayCreate
     * @request POST:/payments/{id}/cloudpayments/checkout/pay
     */
    cloudpaymentsCheckoutPayCreate: (
      id: string,
      pay_payment_cloudpayments: PayCheckoutCloudpaymentsBody,
      params: RequestParams = {},
    ) =>
      this.request<PayCheckoutCloudpaymentsResponse, ErrorResponse>({
        path: `/payments/${id}/cloudpayments/checkout/pay`,
        method: "POST",
        body: pay_payment_cloudpayments,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags payment_cloudpayments_widget
     * @name CloudpaymentsWidgetDetail
     * @request GET:/payments/{id}/cloudpayments/widget
     */
    cloudpaymentsWidgetDetail: (id: string, params: RequestParams = {}) =>
      this.request<WidgetCloudpaymentsPaymentResponse, ErrorResponse>({
        path: `/payments/${id}/cloudpayments/widget`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags payment_cloudpayments_widget
     * @name CloudpaymentsWidgetPayDetail
     * @request GET:/payments/{id}/cloudpayments/widget/pay
     */
    cloudpaymentsWidgetPayDetail: (id: string, params: RequestParams = {}) =>
      this.request<PayWidgetCloudpaymentsResponse, ErrorResponse>({
        path: `/payments/${id}/cloudpayments/widget/pay`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags payment
     * @name SetEmailCreate
     * @request POST:/payments/{id}/set-email
     */
    setEmailCreate: (id: string, payment_set_email: PaymentSetEmailBody, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/payments/${id}/set-email`,
        method: "POST",
        body: payment_set_email,
        type: ContentType.Json,
        ...params,
      }),
  };
  prices = {
    /**
     * No description
     *
     * @tags prices
     * @name PricesList
     * @request GET:/prices
     */
    pricesList: (params: RequestParams = {}) =>
      this.request<PricesResponse, ErrorResponse>({
        path: `/prices`,
        method: "GET",
        ...params,
      }),
  };
  sendPlanMail = {
    /**
     * No description
     *
     * @tags plan
     * @name SendPlanMailCreate
     * @request POST:/send_plan_mail
     */
    sendPlanMailCreate: (body: SendPlanMailBody, params: RequestParams = {}) =>
      this.request<any, ErrorResponse | PaymentRequired>({
        path: `/send_plan_mail`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        ...params,
      }),
  };
  subscriptions = {
    /**
     * No description
     *
     * @tags subscription
     * @name UnsubscribeCreate
     * @request POST:/subscriptions/unsubscribe
     */
    unsubscribeCreate: (subscription_unsubscribe: SubscriptionUnsubscribeBody, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/subscriptions/unsubscribe`,
        method: "POST",
        body: subscription_unsubscribe,
        type: ContentType.Json,
        ...params,
      }),
  };
}
