import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/ask-question(.*)',
]);

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
});

// Конфигурация для определения маршрутов, на которые распространяется middleware
export const config = {
    matcher: [
        '/((?!.*\\..*|_next).*)',
        '/',
        '/(api|trpc)(.*)'
    ],
};
