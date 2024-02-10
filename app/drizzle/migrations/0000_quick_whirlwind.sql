CREATE TABLE `guests` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`invitationId` text,
	`createdAt` integer,
	`updatedAt` integer,
	FOREIGN KEY (`invitationId`) REFERENCES `invitations`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `invitations` (
	`id` text PRIMARY KEY NOT NULL,
	`phoneNumber` text NOT NULL,
	`createdAt` integer,
	`updatedAt` integer
);
