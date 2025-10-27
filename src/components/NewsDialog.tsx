import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface News {
  id: number;
  title: string;
  description: string;
  content: string;
  image_url: string;
  published_date: string;
}

interface NewsDialogProps {
  news: News | null;
  onClose: () => void;
}

const NewsDialog = ({ news, onClose }: NewsDialogProps) => {
  return (
    <Dialog open={news !== null} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        {news && (
          <>
            <DialogHeader>
              <DialogTitle className="text-3xl">{news.title}</DialogTitle>
              <DialogDescription className="text-lg">{news.description}</DialogDescription>
            </DialogHeader>
            {news.image_url && (
              <img 
                src={news.image_url} 
                alt={news.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            )}
            <div className="prose prose-invert max-w-none">
              <p className="text-foreground whitespace-pre-wrap">{news.content}</p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default NewsDialog;
