const Player = ({isToggleOn, player}) => (
    <div key={player.username} className="player-card">
        {
            isToggleOn ?
                <p><b>{player.username}</b><br /> played {player.games_played} games</p>
            :
                <p><b>{player.username}</b><br /> played * games</p>
        }
    </div>
);

export default Player;