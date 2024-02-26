CREATE TABLE IF NOT EXISTS "guests" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"status" varchar DEFAULT 'pending' NOT NULL,
	"invitationId" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "invitations" (
	"id" uuid PRIMARY KEY NOT NULL,
	"phone_number" varchar(10) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "guests" ADD CONSTRAINT "guests_invitationId_invitations_id_fk" FOREIGN KEY ("invitationId") REFERENCES "invitations"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
