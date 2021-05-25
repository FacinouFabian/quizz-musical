import games from "../../games";

const isPartyEnded = ({ winner, gameId }, io) => {
  /* TODO! transform with database */
  const match = games.find((game) => game.id === gameId);

  match.state = "ended";
  match.isEnded = true;

  io.join(match.id);
  io.to(match.id).emit("ended", { winner });
  io.leave(match.id);
};

export default isPartyEnded;
