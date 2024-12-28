package taskRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import task.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}

