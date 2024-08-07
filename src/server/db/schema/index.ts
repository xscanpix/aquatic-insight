import "server-only";

import users from "./user.schema";

const schema = { users };
type Schema = typeof schema;

export type { Schema };
export default schema;
