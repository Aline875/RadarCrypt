"use client"
import { FC } from "react";
import {Area, AreaChart, CartesianGrid,XAxis} from "recharts";
import {TrendingUp} from "lucide-react";

import
{
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import 
{
  ChartConfig, 
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer
  } from "@/components/ui/chart";
import { Indicator } from "@radix-ui/react-navigation-menu";


interface GraficosProps {
  nome: string;
  historico: number[];
}

const chartConfig = 
{
  historico: 
  {
    label: "hitórico",
    color: "hsl:(var(--chart-1))",
  }
} satisfies ChartConfig;

const Graficos: FC<GraficosProps> = ({ nome, historico }) => {
  const chartData = historico.map((valor, index) => ({
  dia: `Dia ${index + 1}`,
  valor,
  }));

  return(
    <Card>
      <CardHeader>
        <CardTitle>
          Gráfico de Área - Histórico
        </CardTitle>
        <CardDescription>
          Evolução de valor de {nome} nos últimos  dias
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config = {chartConfig}>
          <AreaChart 
          accessibilityLayer
          data={chartData}
          margin={{left:12, right: 12,  top:12}}>
            <CartesianGrid vertical={false}/>
            <XAxis 
            dataKey="Dia"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            />
            <ChartTooltip 
            cursor ={false}
            content = { <ChartTooltipContent indicator = "line" />}
            />
            <Area
            dataKey = "valor"
            type = "natural"
            fill = "var(--color-historico)"
            stackId = "a" 
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
};

export default Graficos;  
