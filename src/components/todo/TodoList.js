import { h } from 'hyperapp'
import TodoItem from './TodoItem'

export default (props) =>
    <div class= 'todo-list'>
        {props.items
            .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
            .map(item => <div>
                <TodoItem
                    done= {item.done}
                    text= {item.text}
                    createdAt= {item.createdAt}
                    onToggleDone= {props.onToggleDone(item.id)}
                    onDelete= {props.onDelete(item.id)}
                    color= {props.color}
                    id= {item.id}
                />
                <hr style='margin: 0'></hr>
            </div>
            )
        }
    </div>