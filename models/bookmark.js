const bookmark = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define('bookmarks', {
        name: {
            type: DataTypes.STRING(60)
        },
        
        url: {
            type: DataTypes.STRING(60)
        },

    },{
        timestamps: false
    });
    return Bookmark;
}

module.exports = bookmark;