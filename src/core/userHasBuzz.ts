import games from "../../games";

const userHasBuzz = ({ username, gameId }, io) => {
  /* TODO! transform with database */
  const match = games.find((game) => game.id === gameId);

  io.join(match.id);
  io.to(match.id).emit("buzz", { username });
  io.leave(match.id);
};

export default userHasBuzz;
