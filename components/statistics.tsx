import { ArrowUpRight, CheckCircle2, Clock3, Mail, TrendingUp } from 'lucide-react'

const statistics = [
  {
    label: 'Total messages',
    value: '1,284',
    change: '+12.5%',
    detail: 'vs. last month',
    icon: Mail,
    tone: 'bg-primary text-primary-foreground',
  },
  {
    label: 'Response rate',
    value: '86.4%',
    change: '+4.8%',
    detail: 'vs. last month',
    icon: TrendingUp,
    tone: 'bg-accent text-accent-foreground',
  },
  {
    label: 'Avg. response time',
    value: '2h 18m',
    change: '-18.2%',
    detail: 'faster this month',
    icon: Clock3,
    tone: 'bg-secondary text-secondary-foreground',
  },
  {
    label: 'Resolved threads',
    value: '342',
    change: '+9.1%',
    detail: 'vs. last month',
    icon: CheckCircle2,
    tone: 'bg-muted text-foreground',
  },
]

export function Statistics() {
  return (
    <section aria-labelledby="statistics-heading" className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-primary">Overview</p>
          <h1 id="statistics-heading" className="text-2xl font-semibold tracking-tight text-foreground">
            Your statistics
          </h1>
        </div>
        <button className="hidden items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:flex">
          View report
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {statistics.map((statistic) => {
          const Icon = statistic.icon
          return (
            <article key={statistic.label} className="group rounded-xl border border-border bg-card p-4 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm text-muted-foreground">{statistic.label}</p>
                <div className={`flex size-8 items-center justify-center rounded-lg ${statistic.tone}`}>
                  <Icon className="size-4" aria-hidden="true" />
                </div>
              </div>
              <p className="mt-5 text-2xl font-semibold tracking-tight text-foreground">{statistic.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                <span className="font-medium text-primary">{statistic.change}</span>{' '}
                {statistic.detail}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
