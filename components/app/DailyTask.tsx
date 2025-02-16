import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { PlusCircle, Calendar, CheckCircle, Clock } from "lucide-react"

interface Task {
  id: number
  title: string
  time: string
  completed: boolean
}

export default function DailyTask() {
  const tasks: Task[] = [
    { id: 1, title: "Review project proposal", time: "09:00 AM", completed: false },
    { id: 2, title: "Team standup meeting", time: "10:30 AM", completed: true },
    { id: 3, title: "Client presentation", time: "02:00 PM", completed: true },
    { id: 4, title: "Update documentation", time: "04:00 PM", completed: false },
  ]

  return (
    <div className="h-screen w-full bg-background p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Daily Tasks</h2>
        <Button variant="ghost" size="icon">
          <PlusCircle className="h-5 w-5" />
        </Button>
      </div>

      {/* Date */}
      <div className="flex items-center gap-2 mb-6 px-2">
        <Calendar className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric' 
          })}
        </span>
      </div>

      {/* Tasks List */}
      <ScrollArea className="flex-1 -mx-4">
        <div className="px-4 space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`p-3 rounded-lg border transition-colors
                ${task.completed 
                  ? 'bg-muted border-muted' 
                  : 'bg-card hover:bg-accent/50 border-border'
                }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-5 w-5 p-0 text-muted-foreground"
                  >
                    <CheckCircle 
                      className={`h-4 w-4 ${task.completed ? 'text-primary' : ''}`} 
                    />
                  </Button>
                  <div>
                    <p className={`text-sm font-medium ${
                      task.completed ? 'text-muted-foreground line-through' : ''
                    }`}>
                      {task.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {task.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}