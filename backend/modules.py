from app import db

class Item(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    group = db.Column(db.String(1), nullable = False)
    groupId = db.Column(db.Integer, nullable = False)
    price = db.Column(db.Float, nullable = False)
    name = db.Column(db.String(100), nullable = False)
    description = db.Column(db.Text, nullable = False)
    img_url = db.Column(db.String(200), nullable = True)

    def to_json(self):
        return{
            "id": self.id,
            "group": self.group,
            "groupId": self.groupId,
            "price": self.price,
            "name": self.name,
            "description": self.description,
            "imgUrl": self.img_url
        }
