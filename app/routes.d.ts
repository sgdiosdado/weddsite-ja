declare module "routes-gen" {
  export type RouteParams = {
    "/": Record<string, never>;
    "/:invitationId": { "invitationId": string };
    "/admin/invitations": Record<string, never>;
    "/admin/invitations/:id": { "id": string };
    "/admin/invitations/:id/edit": { "id": string };
    "/admin/invitations/:id/new": { "id": string };
    "/admin/invitations/:invitationId/:guestId/edit": { "invitationId": string, "guestId": string };
    "/admin/invitations/new": Record<string, never>;
  };

  export function route<
    T extends
      | ["/"]
      | ["/:invitationId", RouteParams["/:invitationId"]]
      | ["/admin/invitations"]
      | ["/admin/invitations/:id", RouteParams["/admin/invitations/:id"]]
      | ["/admin/invitations/:id/edit", RouteParams["/admin/invitations/:id/edit"]]
      | ["/admin/invitations/:id/new", RouteParams["/admin/invitations/:id/new"]]
      | ["/admin/invitations/:invitationId/:guestId/edit", RouteParams["/admin/invitations/:invitationId/:guestId/edit"]]
      | ["/admin/invitations/new"]
  >(...args: T): typeof args[0];
}
