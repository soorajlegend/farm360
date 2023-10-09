export async function fetchUserByClerkId(clerkId: string) {
    try {
      const response = await fetch(`https://asibiti.ng/farm360/api/get-user-info.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: clerkId }),
      });
  
      if (!response.ok) {
        throw new Error('User not found');
      }
  
      return response.json();
    } catch (error) {
      throw error;
    }
  }
  