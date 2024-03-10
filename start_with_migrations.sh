#!/bin/sh

set -ex
npx run db:migrate
npm run start
