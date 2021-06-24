module.exports = mongoose => {
    var schema = mongoose.Schema({
        title: String,
        description: String,
        published: Boolean,
        avatar: String
    }, { timestamps: true });

    schema.method("toJSON", function() {
        const { __v, _id, _img, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Food = mongoose.model("food", schema);
    return Food;
};