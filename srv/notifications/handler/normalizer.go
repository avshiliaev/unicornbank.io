package handler

import (
	"unicornbank.io/srv/notifications/mongodb"
	notifications "unicornbank.io/srv/notifications/proto/notifications"
)

func NormalizeStream(input []mongodb.NotificationsModel) []*notifications.NotificationDTO {
	notes := make([]*notifications.NotificationDTO, 0)
	for _, note := range input {
		next := notifications.NotificationDTO{
			Description: note.Description,
			Profile:     note.Profile,
			Status:      note.Status,
			Time:        note.Time,
			Title:       note.Title,
			Uuid:        note.Uuid,
		}
		notes = append(notes, &next)
	}
	return notes
}
