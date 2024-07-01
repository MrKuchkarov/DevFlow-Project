import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/ask-question(.*)',
    '/api/webhooks(.*)'  // Добавляем путь для webhook
]);

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)", "/api/webhooks(.*)"],
};
