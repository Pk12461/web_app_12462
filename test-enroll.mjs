const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

const payload = {
  fullName: 'Test Student',
  email: `test.${Date.now()}@mentorloop.example`,
  phone: '9999999999',
  plan: 'starter',
  currency: 'INR',
  course: 'Web Development',
  city: 'Hyderabad',
  goal: 'Validate enrollment API insert',
  source: 'api-test-script',
};

const run = async () => {
  const response = await fetch(`${baseUrl}/api/enroll`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const body = await response.json();
  console.log('Status:', response.status);
  console.log('Response:', JSON.stringify(body, null, 2));

  if (!response.ok) {
    process.exit(1);
  }
};

run().catch((error) => {
  console.error('Test failed:', error.message);
  process.exit(1);
});

