export default class DistancesApiService {
    static async postDistances(userId) {
      const response = await fetch(`/matching/postdistances/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: userId }),
      });
      const json = await response.json();
  
      return json;
    }
  }