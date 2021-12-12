import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://qxdkyrztohcsqptctdfh.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODY0NDU4MCwiZXhwIjoxOTU0MjIwNTgwfQ.BZa5aZ_4dCiBWYEnhRViTy4Nxwd0YPonfW1brekbEQg"
)