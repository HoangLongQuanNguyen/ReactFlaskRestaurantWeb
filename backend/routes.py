from app import app, db
from flask import request, jsonify
from modules import Item

# Get all items
@app.route("/api/items", methods=["GET"])
def get_items():
    items = Item.query.all()
    result = [item.to_json() for item in items]
    return jsonify(result)

# Create an item
@app.route("/api/items", methods=["POST"])
def create_item():
    try:
        data = request.json

        price = data.get("price")
        name = data.get("name")
        description = data.get("description")
        img_url = f"https://www.flaticon.com/free-icon/food-tray_3180456?term=food+service&page=1&position=5&origin=tag&related_id=3180456"
    
        new_item = Item(name=name, price=price, description=description, img_url=img_url)    
        db.session.add(new_item)
        db.session.commit()

        return jsonify({"msg":"Item created successfully"}),201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}),500

# Delete an item
@app.route("/api/items/<int:id>", methods=["DELETE"])
def delete_item(id):
    try:
        item = Item.query.get(id)
        if item is None:
            return jsonify({"error": "item not found"}), 404
        else:
            db.session.delete(item)
            db.session.commit()
            return jsonify({"msg": "Item deleted successfully"}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}),500

# Update an item
@app.route("/api/items/<int:id>", methods=["PATCH"])
def update_item(id):
    try:
        item = Item.query.get(id)
        if item is None:
            return jsonify({"error": "item not found"}), 404
        else:
            data = request.json
            item.name = data.get("name", item.name)
            item.price = data.get("price", item.price)
            item.description = data.get("description", item.description)
            
            db.session.commit()
            return jsonify({"msg": "Item updated successfully"}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}),500