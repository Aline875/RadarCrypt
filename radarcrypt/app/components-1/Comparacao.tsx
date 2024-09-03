"use client"
import{ FC } from "react";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { HistoryIcon, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";


interface ComparativoProps
{
  moedas:
  {
    nome:string,
    historico:number[];
  }[];
}

const Comparativo: FC <ComparativoProps> = ({moedas}) =>
{
  const chartData = moedas[0].historico.map((_,i) => 
  {
    const dataPoint: Record<string,number | string > = {dia: `Dia ${i + 1}`};
    moedas.forEach((moeda)=>
    {
      dataPoint[moeda.nome] = moeda.historico[i];
    });
    return dataPoint;
  });

  const chartConfig: ChartConfig = moedas.reduce((config, moeda,i )=>
  {
    config[moeda.nome] =
      {
        label:moeda.nome,
        color: `hsl(var(--chart-${i + 1}))`,
      };
    return config;
  }, {} as ChartConfig);
  return(
    <Card>
      <CardHeader>
        <CardTitle>
          Comparação das moedas
        </CardTitle>
        <CardDescription>
          Histórico de diferentes moedas ao longo dos  dias
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
          data= {chartData}
          margin={{left:12, right:12, top:12}}
          stackOffset="expand">
            <CartesianGrid vertical = {false}/>
            <XAxis
            dataKey="dia"
            tickLine = {false}
            axisLine = {false}
            tickMargin={8}
            tickFormatter={(value )=> value.slice(0,3)} />
            <YAxis />
            <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
            />
            <defs>
              {moedas.map((moeda,i)=>(
                <linearGradient
                key={moeda.nome}
                id={`fill-${moeda.nome}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1">
                <stop
                offset="5%"
                stopColor={`hsl(var(--chart-${i + 1}))`}
                stopOpacity={0.4}
                />
                </linearGradient>
              ))}
            </defs>
            {moedas.map((moeda, i)=>
            (
              <Area
               key={moeda.nome}
               dataKey={moeda.nome}
               type="natural"
               fill={`url(#fill-${moeda.nome})`} 
               stackId="a"
               fillOpacity={0.4}
               stroke={`hsl(var(--chart-${i+1}))`}
               />
            ))}
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center gap-2 text-sm">
          <div className="grip gap-2">
          <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Tendência de {moedas[0].nome} <TrendingUp className="h-4 w-4"/>
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Últimos {HistoryIcon.length} dias
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default Comparativo