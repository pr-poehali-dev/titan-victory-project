import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const matchData = {
    league: "PLT Academy",
    date: "24 октября, 17:30",
    homeTeam: {
      name: "Легион",
      logo: "https://cdn.poehali.dev/projects/da0eb89b-b503-4b5b-a744-febfcc1cb2f4/files/a0353df2-5d36-483b-9f0d-a963be40831b.jpg",
      score: 3,
      captain: 19
    },
    awayTeam: {
      name: "Титан",
      logo: "https://cdn.poehali.dev/projects/da0eb89b-b503-4b5b-a744-febfcc1cb2f4/files/2941b48b-e2a6-4ebc-99a1-fc56c4c9c9fc.jpg",
      score: 4,
      captain: 17
    },
    stadium: "https://cdn.poehali.dev/projects/da0eb89b-b503-4b5b-a744-febfcc1cb2f4/files/c65e7ced-c710-4d1a-a576-6ff834b6bd47.jpg"
  };

  const titanLineup = [
    { number: 1, name: "Капустин", position: "Вратарь" },
    { number: 25, name: "Комаров", position: "Опорный полузащитник", goals: 4, yellowCard: true },
    { number: 17, name: "Корнемет", position: "Защита", captain: true },
    { number: 36, name: "Ромиделег", position: "Защита" },
    { number: 59, name: "Корнев", position: "Защита" },
    { number: 45, name: "Волков", position: "Полузащита" },
    { number: 10, name: "Лотос", position: "Полузащита" },
    { number: 90, name: "Воронов", position: "Полузащита" },
    { number: 23, name: "Лихачев", position: "Нападение" },
    { number: 65, name: "Жуков", position: "Нападение" },
    { number: 7, name: "Ворон", position: "Нападение" }
  ];

  const legionLineup = [
    { number: 1, name: "Морозов", position: "Вратарь" },
    { number: 12, name: "Тигинр", position: "Защита" },
    { number: 67, name: "Лоров", position: "Защита" },
    { number: 41, name: "Кубков", position: "Защита" },
    { number: 6, name: "Жезлов", position: "Полузащита" },
    { number: 9, name: "Железов", position: "Полузащита" },
    { number: 35, name: "Шаров", position: "Полузащита" },
    { number: 25, name: "Иванов", position: "Полузащита" },
    { number: 65, name: "Козлов", position: "Нападение" },
    { number: 78, name: "Петров", position: "Нападение" },
    { number: 19, name: "Соколов", position: "Нападение", captain: true, goals: 3 }
  ];

  const events = [
    { time: "70'", type: "goal", team: "Титан", player: "Комаров", detail: "Пенальти" },
    { time: "73'", type: "goal", team: "Титан", player: "Комаров" },
    { time: "85'", type: "goal", team: "Титан", player: "Комаров" },
    { time: "90+3'", type: "goal", team: "Титан", player: "Комаров" },
    { time: "90+4'", type: "goal", team: "Легион", player: "Соколов" },
    { time: "90+5'", type: "goal", team: "Легион", player: "Соколов" },
    { time: "90+6'", type: "goal", team: "Легион", player: "Соколов" },
    { time: "Неизв.", type: "yellow", team: "Титан", player: "Комаров", detail: "Симуляция" }
  ];

  const stats = {
    titanShots: 27,
    legionShots: 5,
    titanOnTarget: 15,
    legionOnTarget: 3
  };

  const table = [
    { position: 1, team: "Титан", played: 10, won: 8, draw: 1, lost: 1, gf: 28, ga: 12, gd: 16, points: 25 },
    { position: 2, team: "Спартак У-21", played: 10, won: 7, draw: 2, lost: 1, gf: 24, ga: 10, gd: 14, points: 23 },
    { position: 3, team: "Легион", played: 10, won: 6, draw: 2, lost: 2, gf: 21, ga: 14, gd: 7, points: 20 },
    { position: 4, team: "Динамо Резерв", played: 10, won: 5, draw: 3, lost: 2, gf: 18, ga: 13, gd: 5, points: 18 },
    { position: 5, team: "Зенит-М", played: 10, won: 4, draw: 2, lost: 4, gf: 15, ga: 16, gd: -1, points: 14 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-gradient-to-r from-[#1A1F2C] to-[#0c1220] text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <Icon name="Trophy" size={32} className="text-[#0EA5E9]" />
            <h1 className="font-halvar text-4xl">ФУТБОЛ 24</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-4 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
          <p className="text-sm text-amber-800 flex items-center gap-2">
            <Icon name="AlertCircle" size={18} />
            <span className="font-medium">Вымышленный матч:</span> Все команды, игроки и события являются полностью вымышленными и созданы исключительно для демонстрационных целей.
          </p>
        </div>

        <Card className="mb-8 overflow-hidden shadow-xl border-t-4 border-t-[#0EA5E9]">
          <div 
            className="h-48 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${matchData.stadium})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <Badge className="mb-2 bg-[#10b981] hover:bg-[#10b981]/90 font-halvar">{matchData.league}</Badge>
              <p className="text-sm opacity-90">{matchData.date}</p>
            </div>
            <div className="absolute top-4 right-4">
              <Badge className="bg-red-600 hover:bg-red-700 font-halvar text-sm px-3 py-1">МАТЧ ОКОНЧЕН</Badge>
            </div>
          </div>
          
          <CardContent className="p-8">
            <div className="grid grid-cols-3 gap-8 items-center mb-6">
              <div className="text-center">
                <img src={matchData.awayTeam.logo} alt="Титан" className="w-24 h-24 mx-auto mb-3 object-contain" />
                <h2 className="font-halvar text-2xl mb-1">{matchData.awayTeam.name}</h2>
                <p className="text-sm text-muted-foreground">Гости</p>
              </div>
              
              <div className="text-center">
                <div className="font-halvar text-6xl mb-2 bg-gradient-to-r from-[#0EA5E9] to-[#10b981] bg-clip-text text-transparent">
                  {matchData.awayTeam.score} : {matchData.homeTeam.score}
                </div>
                <p className="text-sm text-muted-foreground font-medium">Полное время</p>
              </div>
              
              <div className="text-center">
                <img src={matchData.homeTeam.logo} alt="Легион" className="w-24 h-24 mx-auto mb-3 object-contain" />
                <h2 className="font-halvar text-2xl mb-1">{matchData.homeTeam.name}</h2>
                <p className="text-sm text-muted-foreground">Хозяева</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
              <CardTitle className="font-halvar text-xl flex items-center gap-2">
                <Icon name="Target" className="text-[#0EA5E9]" />
                Статистика ударов
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="font-medium">Титан</span>
                  <span className="font-halvar text-lg">{stats.titanShots}</span>
                </div>
                <Progress value={(stats.titanShots / (stats.titanShots + stats.legionShots)) * 100} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="font-medium">Легион</span>
                  <span className="font-halvar text-lg">{stats.legionShots}</span>
                </div>
                <Progress value={(stats.legionShots / (stats.titanShots + stats.legionShots)) * 100} className="h-3 [&>div]:bg-red-500" />
              </div>
              
              <Separator />
              
              <div>
                <p className="text-sm text-muted-foreground mb-3 font-medium">Удары в створ</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Титан</span>
                  <span className="font-halvar text-lg text-[#0EA5E9]">{stats.titanOnTarget}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Легион</span>
                  <span className="font-halvar text-lg text-red-600">{stats.legionOnTarget}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-green-50 to-white">
              <CardTitle className="font-halvar text-xl flex items-center gap-2">
                <Icon name="Clock" className="text-[#10b981]" />
                Хронология событий
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                {events.map((event, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <Badge variant="outline" className="font-halvar min-w-[60px] justify-center">
                      {event.time}
                    </Badge>
                    <div className="flex-1">
                      {event.type === 'goal' && (
                        <div className="flex items-center gap-2">
                          <Icon name="Goal" size={20} className="text-[#10b981]" fallback="Circle" />
                          <span className="font-medium">{event.player}</span>
                          <span className="text-sm text-muted-foreground">({event.team})</span>
                          {event.detail && <Badge variant="secondary" className="text-xs">{event.detail}</Badge>}
                        </div>
                      )}
                      {event.type === 'yellow' && (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-5 bg-yellow-400 rounded-sm"></div>
                          <span className="font-medium">{event.player}</span>
                          <span className="text-sm text-muted-foreground">({event.detail})</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
              <CardTitle className="font-halvar text-xl flex items-center gap-2">
                <img src={matchData.awayTeam.logo} alt="Титан" className="w-8 h-8 object-contain" />
                Состав Титана
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-2">
                {titanLineup.map((player, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 transition-colors">
                    <Badge variant="outline" className="font-halvar w-10 justify-center">
                      {player.number}
                    </Badge>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{player.name}</span>
                        {player.captain && <Icon name="Star" size={16} className="text-yellow-500" />}
                        {player.yellowCard && <div className="w-3 h-4 bg-yellow-400 rounded-sm"></div>}
                      </div>
                      <p className="text-xs text-muted-foreground">{player.position}</p>
                    </div>
                    {player.goals && player.goals > 0 && (
                      <Badge className="bg-[#10b981] hover:bg-[#10b981]/90 font-halvar">
                        <Icon name="Goal" size={14} className="mr-1" fallback="Circle" />
                        {player.goals}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-50 to-white">
              <CardTitle className="font-halvar text-xl flex items-center gap-2">
                <img src={matchData.homeTeam.logo} alt="Легион" className="w-8 h-8 object-contain" />
                Состав Легиона
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-2">
                {legionLineup.map((player, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 rounded hover:bg-red-50 transition-colors">
                    <Badge variant="outline" className="font-halvar w-10 justify-center">
                      {player.number}
                    </Badge>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{player.name}</span>
                        {player.captain && <Icon name="Star" size={16} className="text-yellow-500" />}
                      </div>
                      <p className="text-xs text-muted-foreground">{player.position}</p>
                    </div>
                    {player.goals && player.goals > 0 && (
                      <Badge className="bg-[#10b981] hover:bg-[#10b981]/90 font-halvar">
                        <Icon name="Goal" size={14} className="mr-1" fallback="Circle" />
                        {player.goals}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
            <CardTitle className="font-halvar text-2xl flex items-center gap-2">
              <Icon name="Table" className="text-purple-600" />
              Турнирная таблица PLT Academy
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-3 px-2 font-halvar text-sm">#</th>
                    <th className="text-left py-3 px-4 font-halvar text-sm">Команда</th>
                    <th className="text-center py-3 px-2 font-halvar text-sm">И</th>
                    <th className="text-center py-3 px-2 font-halvar text-sm">В</th>
                    <th className="text-center py-3 px-2 font-halvar text-sm">Н</th>
                    <th className="text-center py-3 px-2 font-halvar text-sm">П</th>
                    <th className="text-center py-3 px-2 font-halvar text-sm">ГЗ</th>
                    <th className="text-center py-3 px-2 font-halvar text-sm">ГП</th>
                    <th className="text-center py-3 px-2 font-halvar text-sm">РГ</th>
                    <th className="text-center py-3 px-2 font-halvar text-sm bg-slate-100">О</th>
                  </tr>
                </thead>
                <tbody>
                  {table.map((row) => (
                    <tr 
                      key={row.position} 
                      className={`border-b hover:bg-slate-50 transition-colors ${
                        row.team === 'Титан' || row.team === 'Легион' ? 'bg-blue-50/50' : ''
                      }`}
                    >
                      <td className="py-3 px-2">
                        <Badge 
                          variant={row.position === 1 ? "default" : "outline"}
                          className={`font-halvar ${row.position === 1 ? 'bg-[#0EA5E9]' : ''}`}
                        >
                          {row.position}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 font-medium">{row.team}</td>
                      <td className="py-3 px-2 text-center text-sm">{row.played}</td>
                      <td className="py-3 px-2 text-center text-sm">{row.won}</td>
                      <td className="py-3 px-2 text-center text-sm">{row.draw}</td>
                      <td className="py-3 px-2 text-center text-sm">{row.lost}</td>
                      <td className="py-3 px-2 text-center text-sm">{row.gf}</td>
                      <td className="py-3 px-2 text-center text-sm">{row.ga}</td>
                      <td className={`py-3 px-2 text-center text-sm font-medium ${row.gd > 0 ? 'text-green-600' : row.gd < 0 ? 'text-red-600' : ''}`}>
                        {row.gd > 0 ? '+' : ''}{row.gd}
                      </td>
                      <td className="py-3 px-2 text-center bg-slate-100">
                        <span className="font-halvar text-lg">{row.points}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              <p className="font-medium mb-1">Обозначения:</p>
              <p>И - Игры, В - Победы, Н - Ничьи, П - Поражения, ГЗ - Голы забитые, ГП - Голы пропущенные, РГ - Разница голов, О - Очки</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="bg-[#1A1F2C] text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-75">© 2024 Футбол 24. Все права защищены.</p>
          <p className="text-xs opacity-50 mt-2">Вымышленный проект для демонстрационных целей</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
