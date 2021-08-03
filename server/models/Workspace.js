import mongoose from 'mongoose';

const WorkspaceSchema = new mongoose.Schema({
    workName: {
        type: String,
        required: true,
    },
    boards: [{ boardName: String }]
}, { timestamps: true });

const Workspace = mongoose.model('Workspace', WorkspaceSchema);

export default Workspace;