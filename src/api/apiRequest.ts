export const postEmotion = async (type: string) => {
  try {
    const response = await fetch("http://10.50.97.109:8080/api/v1/emotions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: type,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error posting emotion: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error posting emotion data:", error);
    throw error;
  }
};

export const fetchTodayEmotion = async () => {
  try {
    const response = await fetch(
      "http://10.50.97.109:8080/api/v1/emotions/today",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error posting emotion: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error posting emotion data:", error);
    throw error;
  }
};

export const fetchMonthlyEmotion = async (year: number, month: number) => {
  try {
    const response = await fetch(
      `http://10.50.97.109:8080/api/v1/emotions/monthly?year=${year}&month=${month}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching emotions:", error);
  }
};
