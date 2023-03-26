// Make this a server-only component to pretend we're accessing server-side
// things like environment variables.
import "server-only";

export const API_ROOT = "http://host.docker.internal:8000";
