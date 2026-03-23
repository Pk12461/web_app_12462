CREATE TABLE IF NOT EXISTS mentorloop_leads (
  id BIGSERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  plan TEXT NOT NULL,
  currency TEXT NOT NULL,
  course TEXT NOT NULL,
  city TEXT NOT NULL,
  goal TEXT,
  source TEXT DEFAULT 'enrollment-page',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS mentorloop_leads_email_idx ON mentorloop_leads (email);
CREATE INDEX IF NOT EXISTS mentorloop_leads_created_at_idx ON mentorloop_leads (created_at DESC);

