declare module "routes-gen" {
  export type RouteParams = {
    "/": Record<string, never>;
    "/:invitationId": { "invitationId": string };
    "/admin/invitations": Record<string, never>;
    "/admin/invitations/:id": { "id": string };
  };

  export function route<
    T extends
      | ["/"]
      | ["/:invitationId", RouteParams["/:invitationId"]]
      | ["/admin/invitations"]
      | ["/admin/invitations/:id", RouteParams["/admin/invitations/:id"]]
  >(...args: T): typeof args[0];
}
