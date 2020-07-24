package mongodb

type NotificationsModel struct {
	// ID      primitive.ObjectID `bson:"_id,omitempty" json:"_id"`
	Description string `bson:"description,omitempty" json:"description"`
	Profile     string `bson:"profile,omitempty" json:"profile"`
	Status      string `bson:"status,omitempty" json:"status"`
	Time        string `bson:"time,omitempty" json:"time"`
	Title       string `bson:"title,omitempty" json:"title"`
	Uuid        string `bson:"uuid,omitempty" json:"uuid"`
}
