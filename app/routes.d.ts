declare module "routes-gen" {
  export type RouteParams = {
    "/": Record<string, never>;
    "/:invitationId": { "invitationId": string };
  };

  export function route<
    T extends
      | ["/"]
      | ["/:invitationId", RouteParams["/:invitationId"]]
  >(...args: T): typeof args[0];
}
