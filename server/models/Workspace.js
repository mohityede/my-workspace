import mongoose from 'mongoose';

const BoardSchema = new mongoose.Schema({
    boardName: {
        type: String,
        required: true
    }
}, { timestamps: true });

const WorkspaceSchema = new mongoose.Schema({
    workName: {
        type: String,
        required: true,
    },
    boards: [BoardSchema]
}, { timestamps: true });

const Workspace = mongoose.model('Workspace', WorkspaceSchema);

export default Workspace;