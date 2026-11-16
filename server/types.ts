export interface Statement {
 bind(...values: unknown[]): Statement;
 first<T = Record<string, unknown>>(): Promise<T | null>;
 all<T = Record<string, unknown>>(): Promise<{ results: T[] }>;
 run(): Promise<{ meta: { changes: number }; success: boolean }>;
}
export interface D1 { prepare(sql: string): Statement; batch(statements: Statement[]): Promise<unknown[]> }
export interface Env {
 DB: D1; ENVIRONMENT: string; APP_ORIGIN: string; AUTH_SECRET?: string; SESSION_SECRET?: string;
 GOOGLE_CLIENT_ID?: string; GOOGLE_CLIENT_SECRET?: string;
 STRIPE_SECRET_KEY?: string; STRIPE_ACCOUNT_ID?: string; STRIPE_PRICE_ID?: string; STRIPE_PRODUCT_ID?: string;
 STRIPE_PROJECT_ID?: string; STRIPE_WEBHOOK_SECRET?: string;
 CONTACT_DATA_KEY?: string; EMAIL_API_KEY?: string; EMAIL_FROM?: string; SUPPORT_EMAIL?: string;
}
export interface User { id: string; name: string; email: string; stripe_customer_id: string | null }
export interface Membership { active: boolean; current_period_end: number | null; cancel_at_period_end: boolean }
export interface Order {
 id: string; user_id: string; site: string; account_id: string; environment: string; price_id: string; product_id: string; origin: string; checkout_email: string;
 customer_id: string | null; session_id: string | null; subscription_id: string | null; checkout_url: string | null;
 status: string; created_at: number; expires_at: number; proof_revision: number;
 subscription_status: string | null; cancel_at_period_end: number; provider_period_end: number | null;
}
export const stmt = (env: Env, sql: string, ...args: unknown[]) => env.DB.prepare(sql).bind(...args);
