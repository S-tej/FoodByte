import mongoose, {Schema, model, models} from 'mongoose';

const ExtraPriceSchema = new Schema({
    name: String,
    price: Number,
})

const MenuItemSchema = new Schema({
    name: {type: String},
    description: {type: String},
    category: {type: mongoose.Types.ObjectId},
    basePrice: {type: Number},
    sizes: {type: [ExtraPriceSchema]},
    extraIngredientPrices: {type: [ExtraPriceSchema]},
    imageURL: {type: String},
}, {timestamps: true});

export const MenuItem = models?.MenuItem || model('MenuItem', MenuItemSchema);