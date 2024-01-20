export class Games {
  constructor(category, onCardClick) {
    this.category = category;
    this.onCardClick = onCardClick;
  }
  async getData() {
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "26c6ba98dbmsh68e85554fd6d2b0p1849e9jsnee0db21e0fae",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    return data;
  }
}

